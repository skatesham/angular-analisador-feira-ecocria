import { Component, signal, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { MessageModule } from 'primeng/message';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FileParserService } from '../../core/services/file-parser.service';
import { DataPipelineService } from '../../core/services/data-pipeline.service';
import { AnalyticsService } from '../../core/services/analytics.service';
import { StorageService } from '../../core/services/storage.service';
import { ArquivoUpload, PreviewArquivo, ResultadoProcessamento, AnalisesSalva } from '../../core/models/processamento.model';

type EtapaProcessamento = 'upload' | 'lendo' | 'interpretando' | 'padronizando' | 'gerando' | 'concluido' | 'erro';

@Component({
  selector: 'app-analisador',
  imports: [
    CommonModule,
    FileUploadModule,
    ButtonModule,
    CardModule,
    ProgressBarModule,
    MessageModule,
    TableModule,
    TagModule,
    ConfirmDialogModule,
    ToastModule
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './analisador.component.html',
  styleUrl: './analisador.component.css'
})
export class AnalisadorComponent implements OnInit {
  private fileParser = inject(FileParserService);
  private dataPipeline = inject(DataPipelineService);
  private analytics = inject(AnalyticsService);
  private storageService = inject(StorageService);
  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);
  private router = inject(Router);

  arquivos = signal<File[]>([]);
  previews = signal<PreviewArquivo[]>([]);
  etapaAtual = signal<EtapaProcessamento>('upload');
  progresso = signal<number>(0);
  mensagemEtapa = signal<string>('');
  resultado = signal<ResultadoProcessamento | null>(null);
  erros = signal<string[]>([]);
  analisesHistorico = signal<AnalisesSalva[]>([]);

  readonly etapas = [
    { key: 'lendo', label: 'Lendo arquivos', progresso: 20 },
    { key: 'interpretando', label: 'Interpretando anotações', progresso: 40 },
    { key: 'padronizando', label: 'Padronizando itens e categorias', progresso: 60 },
    { key: 'gerando', label: 'Gerando painel', progresso: 80 },
    { key: 'concluido', label: 'Concluído', progresso: 100 }
  ];

  async ngOnInit(): Promise<void> {
    // Desabilitar sessão privada para permitir acesso ao histórico
    this.storageService.setSessaoPrivada(false);
    await this.carregarHistorico();
  }

  async carregarHistorico(): Promise<void> {
    try {
      const analises = await this.storageService.listarAnalises();
      this.analisesHistorico.set(analises);
    } catch (error) {
      console.error('Erro ao carregar histórico:', error);
    }
  }

  async carregarAnalise(id: string): Promise<void> {
    try {
      const analise = await this.storageService.carregarAnalise(id);
      if (analise) {
        this.analytics.setVendas(analise.resultado.vendas);
        this.router.navigate(['/painel']);
      }
    } catch (error) {
      console.error('Erro ao carregar análise:', error);
      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'Erro ao carregar análise. Tente novamente.',
        life: 5000
      });
    }
  }

  excluirAnalise(id: string): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir esta análise?',
      header: 'Confirmar Exclusão',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim, excluir',
      rejectLabel: 'Cancelar',
      acceptButtonStyleClass: 'p-button-danger',
      accept: async () => {
        try {
          // Desabilitar sessão privada para permitir exclusão
          this.storageService.setSessaoPrivada(false);
          await this.storageService.apagarAnalise(id);
          await this.carregarHistorico();
          this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Análise excluída com sucesso!',
            life: 3000
          });
        } catch (error) {
          console.error('Erro ao excluir análise:', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao excluir análise. Tente novamente.',
            life: 5000
          });
        }
      }
    });
  }

  async onFileSelect(event: any): Promise<void> {
    const files: File[] = event.files || event.currentFiles || [];
    
    if (files.length === 0) return;

    this.arquivos.set(files);
    this.etapaAtual.set('lendo');
    this.progresso.set(20);
    this.mensagemEtapa.set('Lendo arquivos...');
    this.erros.set([]);

    try {
      const arquivosUpload = await this.fileParser.parseFiles(files);
      
      this.etapaAtual.set('interpretando');
      this.progresso.set(40);
      this.mensagemEtapa.set('Interpretando anotações...');

      await this.delay(500);

      const previews = await Promise.all(
        arquivosUpload.map(arq => this.fileParser.generatePreview(arq))
      );
      this.previews.set(previews);

      this.etapaAtual.set('padronizando');
      this.progresso.set(60);
      this.mensagemEtapa.set('Padronizando itens e categorias...');

      await this.delay(500);

      const resultado = await this.dataPipeline.processarArquivos(arquivosUpload);

      this.etapaAtual.set('gerando');
      this.progresso.set(80);
      this.mensagemEtapa.set('Gerando painel...');

      await this.delay(500);

      this.analytics.setVendas(resultado.vendas);
      this.resultado.set(resultado);

      this.etapaAtual.set('concluido');
      this.progresso.set(100);
      this.mensagemEtapa.set('Processamento concluído!');

      if (resultado.estatisticas.erros.length > 0) {
        this.erros.set(resultado.estatisticas.erros.map(e => e.mensagem));
      }

    } catch (error) {
      this.etapaAtual.set('erro');
      this.progresso.set(0);
      this.mensagemEtapa.set('Erro ao processar arquivos');
      this.erros.set([error instanceof Error ? error.message : 'Erro desconhecido']);
    }
  }

  irParaPainel(): void {
    this.router.navigate(['/painel']);
  }

  reiniciar(): void {
    this.arquivos.set([]);
    this.previews.set([]);
    this.etapaAtual.set('upload');
    this.progresso.set(0);
    this.mensagemEtapa.set('');
    this.resultado.set(null);
    this.erros.set([]);
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  getSeveridade(tipo: 'erro' | 'warning'): 'error' | 'warn' {
    return tipo === 'erro' ? 'error' : 'warn';
  }
}
