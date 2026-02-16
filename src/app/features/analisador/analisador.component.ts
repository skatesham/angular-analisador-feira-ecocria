import { Component, signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { MessageModule } from 'primeng/message';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { FileParserService } from '../../core/services/file-parser.service';
import { DataPipelineService } from '../../core/services/data-pipeline.service';
import { AnalyticsService } from '../../core/services/analytics.service';
import { ArquivoUpload, PreviewArquivo, ResultadoProcessamento } from '../../core/models/processamento.model';

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
    TagModule
  ],
  templateUrl: './analisador.component.html',
  styleUrl: './analisador.component.css'
})
export class AnalisadorComponent {
  private fileParser = inject(FileParserService);
  private dataPipeline = inject(DataPipelineService);
  private analytics = inject(AnalyticsService);
  private router = inject(Router);

  arquivos = signal<File[]>([]);
  previews = signal<PreviewArquivo[]>([]);
  etapaAtual = signal<EtapaProcessamento>('upload');
  progresso = signal<number>(0);
  mensagemEtapa = signal<string>('');
  resultado = signal<ResultadoProcessamento | null>(null);
  erros = signal<string[]>([]);

  readonly etapas = [
    { key: 'lendo', label: 'Lendo arquivos', progresso: 20 },
    { key: 'interpretando', label: 'Interpretando anotações', progresso: 40 },
    { key: 'padronizando', label: 'Padronizando itens e categorias', progresso: 60 },
    { key: 'gerando', label: 'Gerando painel', progresso: 80 },
    { key: 'concluido', label: 'Concluído', progresso: 100 }
  ];

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
