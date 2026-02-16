import { Injectable, signal } from '@angular/core';
import { AnalisesSalva, ResultadoProcessamento } from '../models/processamento.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly DB_NAME = 'analisador-feira-db';
  private readonly DB_VERSION = 1;
  private readonly STORE_NAME = 'analises';
  
  private db = signal<IDBDatabase | null>(null);
  private sessaoPrivada = signal<boolean>(true);

  async init(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.DB_NAME, this.DB_VERSION);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db.set(request.result);
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        
        if (!db.objectStoreNames.contains(this.STORE_NAME)) {
          const store = db.createObjectStore(this.STORE_NAME, { keyPath: 'id' });
          store.createIndex('timestamp', 'timestamp', { unique: false });
          store.createIndex('nome', 'nome', { unique: false });
        }
      };
    });
  }

  setSessaoPrivada(privada: boolean): void {
    this.sessaoPrivada.set(privada);
  }

  isSessaoPrivada(): boolean {
    return this.sessaoPrivada();
  }

  async salvarAnalise(
    nome: string,
    resultado: ResultadoProcessamento,
    id?: string
  ): Promise<AnalisesSalva> {
    if (this.sessaoPrivada()) {
      throw new Error('Não é possível salvar em sessão privada');
    }

    if (!this.db()) {
      await this.init();
    }

    const vendas = resultado.vendas;
    const dataInicio = vendas.length > 0 
      ? new Date(Math.min(...vendas.map(v => v.data.getTime())))
      : new Date();
    const dataFim = vendas.length > 0
      ? new Date(Math.max(...vendas.map(v => v.data.getTime())))
      : new Date();
    const valorTotal = vendas.reduce((sum, v) => sum + v.valorTotal, 0);

    const analise: AnalisesSalva = {
      id: id || uuidv4(),
      nome,
      resultado,
      dataInicio,
      dataFim,
      totalVendas: vendas.length,
      valorTotal,
      timestamp: new Date()
    };

    return new Promise((resolve, reject) => {
      const transaction = this.db()!.transaction([this.STORE_NAME], 'readwrite');
      const store = transaction.objectStore(this.STORE_NAME);
      const request = id ? store.put(analise) : store.add(analise);

      request.onsuccess = () => resolve(analise);
      request.onerror = () => reject(request.error);
    });
  }

  async listarAnalises(): Promise<AnalisesSalva[]> {
    if (this.sessaoPrivada()) {
      return [];
    }

    if (!this.db()) {
      await this.init();
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db()!.transaction([this.STORE_NAME], 'readonly');
      const store = transaction.objectStore(this.STORE_NAME);
      const request = store.getAll();

      request.onsuccess = () => {
        const analises = request.result as AnalisesSalva[];
        analises.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
        resolve(analises);
      };
      request.onerror = () => reject(request.error);
    });
  }

  async carregarAnalise(id: string): Promise<AnalisesSalva | null> {
    if (this.sessaoPrivada()) {
      return null;
    }

    if (!this.db()) {
      await this.init();
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db()!.transaction([this.STORE_NAME], 'readonly');
      const store = transaction.objectStore(this.STORE_NAME);
      const request = store.get(id);

      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
  }

  async apagarAnalise(id: string): Promise<void> {
    if (this.sessaoPrivada()) {
      throw new Error('Não é possível apagar em sessão privada');
    }

    if (!this.db()) {
      await this.init();
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db()!.transaction([this.STORE_NAME], 'readwrite');
      const store = transaction.objectStore(this.STORE_NAME);
      const request = store.delete(id);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  async apagarTudo(): Promise<void> {
    if (this.sessaoPrivada()) {
      throw new Error('Não é possível apagar em sessão privada');
    }

    if (!this.db()) {
      await this.init();
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db()!.transaction([this.STORE_NAME], 'readwrite');
      const store = transaction.objectStore(this.STORE_NAME);
      const request = store.clear();

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }
}
