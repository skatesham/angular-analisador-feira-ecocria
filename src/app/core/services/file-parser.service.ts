import { Injectable, signal } from '@angular/core';
import * as XLSX from 'xlsx';
import Papa from 'papaparse';
import { ArquivoUpload, PreviewArquivo, ErroProcessamento, SchemaInferido, TipoArquivo } from '../models/processamento.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class FileParserService {
  private readonly MAX_PREVIEW_LINES = 50;
  private readonly MAX_FILE_SIZE = 10 * 1024 * 1024;

  async parseFiles(files: File[]): Promise<ArquivoUpload[]> {
    const arquivos: ArquivoUpload[] = [];

    for (const file of files) {
      const arquivo = await this.parseFile(file);
      if (arquivo) {
        arquivos.push(arquivo);
      }
    }

    return arquivos;
  }

  async parseFile(file: File): Promise<ArquivoUpload | null> {
    if (file.size > this.MAX_FILE_SIZE) {
      throw new Error(`Arquivo ${file.name} excede o tamanho máximo de 10MB`);
    }

    const tipo = this.detectFileType(file.name);
    if (!tipo) {
      throw new Error(`Tipo de arquivo não suportado: ${file.name}`);
    }

    const conteudo = await this.readFile(file);
    const encoding = this.detectEncoding(conteudo);

    return {
      id: uuidv4(),
      nome: file.name,
      tipo,
      tamanho: file.size,
      conteudo,
      encoding,
      timestamp: new Date()
    };
  }

  async generatePreview(arquivo: ArquivoUpload): Promise<PreviewArquivo> {
    const erros: ErroProcessamento[] = [];
    let amostra: string[][] = [];
    let totalLinhas = 0;
    let schema: SchemaInferido | undefined;

    try {
      switch (arquivo.tipo) {
        case 'txt':
          ({ amostra, totalLinhas } = this.previewTxt(arquivo));
          break;
        case 'csv':
          ({ amostra, totalLinhas, schema } = await this.previewCsv(arquivo));
          break;
        case 'xlsx':
          ({ amostra, totalLinhas, schema } = await this.previewXlsx(arquivo));
          break;
      }
    } catch (error) {
      erros.push({
        arquivo: arquivo.nome,
        tipo: 'erro',
        mensagem: error instanceof Error ? error.message : 'Erro desconhecido ao processar arquivo'
      });
    }

    return {
      arquivo,
      schema,
      amostra,
      totalLinhas,
      encoding: arquivo.encoding || 'UTF-8',
      valido: erros.length === 0,
      erros
    };
  }

  private detectFileType(filename: string): TipoArquivo | null {
    const ext = filename.toLowerCase().split('.').pop();
    switch (ext) {
      case 'txt':
        return 'txt';
      case 'csv':
        return 'csv';
      case 'xlsx':
      case 'xls':
        return 'xlsx';
      default:
        return null;
    }
  }

  private async readFile(file: File): Promise<string | ArrayBuffer> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target?.result || '');
      reader.onerror = () => reject(new Error('Erro ao ler arquivo'));
      
      if (file.name.toLowerCase().endsWith('.xlsx') || file.name.toLowerCase().endsWith('.xls')) {
        reader.readAsArrayBuffer(file);
      } else {
        reader.readAsText(file);
      }
    });
  }

  private detectEncoding(conteudo: string | ArrayBuffer): string {
    if (typeof conteudo !== 'string') return 'binary';
    
    const hasUtf8 = /[\u00C0-\u00FF]/.test(conteudo);
    return hasUtf8 ? 'UTF-8' : 'ASCII';
  }

  private previewTxt(arquivo: ArquivoUpload): { amostra: string[][], totalLinhas: number } {
    const conteudo = arquivo.conteudo as string;
    const linhas = conteudo.split(/\r?\n/).filter(l => l.trim());
    const totalLinhas = linhas.length;
    const amostra = linhas.slice(0, this.MAX_PREVIEW_LINES).map(l => [l]);

    return { amostra, totalLinhas };
  }

  private async previewCsv(arquivo: ArquivoUpload): Promise<{ amostra: string[][], totalLinhas: number, schema: SchemaInferido }> {
    const conteudo = arquivo.conteudo as string;
    
    return new Promise((resolve, reject) => {
      Papa.parse(conteudo, {
        preview: this.MAX_PREVIEW_LINES,
        header: false,
        skipEmptyLines: true,
        complete: (results) => {
          const amostra = results.data as string[][];
          const totalLinhas = conteudo.split(/\r?\n/).filter(l => l.trim()).length;
          
          const schema = this.inferSchema(amostra);
          
          resolve({ amostra, totalLinhas, schema });
        },
        error: (error: Error) => reject(error)
      });
    });
  }

  private async previewXlsx(arquivo: ArquivoUpload): Promise<{ amostra: string[][], totalLinhas: number, schema: SchemaInferido }> {
    const workbook = XLSX.read(arquivo.conteudo, { type: 'array' });
    const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(firstSheet, { header: 1 }) as string[][];
    
    const totalLinhas = data.length;
    const amostra = data.slice(0, this.MAX_PREVIEW_LINES);
    const schema = this.inferSchema(amostra);

    return { amostra, totalLinhas, schema };
  }

  private inferSchema(amostra: string[][]): SchemaInferido {
    if (amostra.length === 0) {
      return { colunas: [], tipos: {}, obrigatorios: [], exemplos: {} };
    }

    const colunas = amostra[0] || [];
    const tipos: Record<string, 'string' | 'number' | 'date' | 'boolean'> = {};
    const exemplos: Record<string, string[]> = {};
    const obrigatorios: string[] = [];

    colunas.forEach((coluna, idx) => {
      const valores = amostra.slice(1).map(row => row[idx]).filter(v => v != null && v !== '');
      
      if (valores.length > 0) {
        obrigatorios.push(coluna);
        exemplos[coluna] = valores.slice(0, 3);
        tipos[coluna] = this.inferType(valores);
      } else {
        tipos[coluna] = 'string';
        exemplos[coluna] = [];
      }
    });

    return { colunas, tipos, obrigatorios, exemplos };
  }

  private inferType(valores: string[]): 'string' | 'number' | 'date' | 'boolean' {
    const amostraValores = valores.slice(0, 10);
    
    const todosNumeros = amostraValores.every(v => !isNaN(Number(v)));
    if (todosNumeros) return 'number';
    
    const todosBooleanos = amostraValores.every(v => 
      v.toLowerCase() === 'true' || v.toLowerCase() === 'false' || v === '0' || v === '1'
    );
    if (todosBooleanos) return 'boolean';
    
    const todasDatas = amostraValores.every(v => !isNaN(Date.parse(v)));
    if (todasDatas) return 'date';
    
    return 'string';
  }
}
