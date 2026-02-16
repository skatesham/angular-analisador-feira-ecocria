import { Injectable } from '@angular/core';
import { Venda } from '../models/venda.model';
import { ItemVendido, CategoriaAnalise } from '../models/analytics.model';
import { ResultadoProcessamento } from '../models/processamento.model';

@Injectable({
  providedIn: 'root'
})
export class ExportService {
  private readonly APP_VERSION = '1.0.0';

  exportarCsvCompleto(vendas: Venda[], periodo?: { inicio: Date; fim: Date }): void {
    const linhas: string[] = [];
    
    const cabecalho = [
      'Data',
      'Dia',
      'Local',
      'Produto',
      'Qnt',
      'Valor Uni.',
      'Total',
      'Tipo',
      'Categoria',
      'Caracteristica',
      'Material 1',
      'Material 2'
    ];
    
    linhas.push(cabecalho.join('\t'));

    vendas.forEach(venda => {
      venda.itens.forEach(item => {
        const linha = [
          this.formatDateBR(venda.data),
          this.escapeCsv(venda.dia),
          this.escapeCsv(venda.local),
          this.escapeCsv(item.nome),
          item.quantidade.toString(),
          item.precoUnitario?.toFixed(1) || '',
          item.valorTotal.toFixed(1),
          this.escapeCsv(item.tipo),
          this.escapeCsv(item.categoria),
          this.escapeCsv(item.caracteristica || ''),
          this.escapeCsv(item.material1 || ''),
          this.escapeCsv(item.material2 || '')
        ];
        
        linhas.push(linha.join('\t'));
      });
    });

    const csv = linhas.join('\n');
    const nomeArquivo = this.gerarNomeArquivo('vendas-feira', periodo);
    this.download(csv, nomeArquivo, 'text/csv');
  }

  exportarResumoPorItem(itens: ItemVendido[], periodo?: { inicio: Date; fim: Date }): void {
    const linhas: string[] = [];
    
    const cabecalho = [
      'item',
      'categoria',
      'quantidade_total',
      'receita_total',
      'participacao_percentual',
      'preco_medio',
      'frequencia_vendas'
    ];
    
    linhas.push(cabecalho.join(','));

    itens.forEach(item => {
      const linha = [
        this.escapeCsv(item.nome),
        this.escapeCsv(item.categoria),
        item.quantidade.toString(),
        item.receita.toFixed(2),
        item.participacao.toFixed(2),
        item.precoMedio.toFixed(2),
        item.frequencia.toString()
      ];
      
      linhas.push(linha.join(','));
    });

    const csv = linhas.join('\n');
    const nomeArquivo = this.gerarNomeArquivo('resumo-por-item', periodo);
    this.download(csv, nomeArquivo, 'text/csv');
  }

  exportarResumoPorCategoria(categorias: CategoriaAnalise[], periodo?: { inicio: Date; fim: Date }): void {
    const linhas: string[] = [];
    
    const cabecalho = [
      'categoria',
      'receita_total',
      'quantidade_total',
      'participacao_percentual',
      'total_itens_diferentes'
    ];
    
    linhas.push(cabecalho.join(','));

    categorias.forEach(categoria => {
      const linha = [
        this.escapeCsv(categoria.nome),
        categoria.receita.toFixed(2),
        categoria.quantidade.toString(),
        categoria.participacao.toFixed(2),
        categoria.itens.toString()
      ];
      
      linhas.push(linha.join(','));
    });

    const csv = linhas.join('\n');
    const nomeArquivo = this.gerarNomeArquivo('resumo-por-categoria', periodo);
    this.download(csv, nomeArquivo, 'text/csv');
  }

  exportarLogProcessamento(resultado: ResultadoProcessamento): void {
    const linhas: string[] = [];
    
    linhas.push('=== LOG DE PROCESSAMENTO ===');
    linhas.push(`Data: ${resultado.timestamp.toLocaleString()}`);
    linhas.push(`Versão: ${resultado.versaoApp}`);
    linhas.push('');
    
    linhas.push('=== ESTATÍSTICAS ===');
    linhas.push(`Arquivos processados: ${resultado.estatisticas.totalArquivos}`);
    linhas.push(`Total de linhas: ${resultado.estatisticas.totalLinhas}`);
    linhas.push(`Linhas processadas: ${resultado.estatisticas.linhasProcessadas}`);
    linhas.push(`Linhas descartadas: ${resultado.estatisticas.linhasDescartadas}`);
    linhas.push(`Linhas corrigidas: ${resultado.estatisticas.linhasCorrigidas}`);
    linhas.push(`Vendas geradas: ${resultado.estatisticas.vendasGeradas}`);
    linhas.push(`Itens processados: ${resultado.estatisticas.itensProcessados}`);
    linhas.push('');
    
    if (resultado.estatisticas.erros.length > 0) {
      linhas.push('=== ERROS ===');
      resultado.estatisticas.erros.forEach(erro => {
        linhas.push(`[${erro.arquivo}${erro.linha ? `:${erro.linha}` : ''}] ${erro.mensagem}`);
      });
      linhas.push('');
    }
    
    if (resultado.estatisticas.warnings.length > 0) {
      linhas.push('=== AVISOS ===');
      resultado.estatisticas.warnings.forEach(warning => {
        linhas.push(`[${warning.arquivo}${warning.linha ? `:${warning.linha}` : ''}] ${warning.mensagem}`);
      });
      linhas.push('');
    }
    
    linhas.push('=== LOG DETALHADO ===');
    resultado.logs.forEach(log => linhas.push(log));

    const txt = linhas.join('\n');
    const nomeArquivo = `log-processamento-${this.formatTimestamp(resultado.timestamp)}.txt`;
    this.download(txt, nomeArquivo, 'text/plain');
  }

  private escapeCsv(valor: string): string {
    if (!valor) return '';
    
    if (valor.includes(',') || valor.includes('"') || valor.includes('\n')) {
      return `"${valor.replace(/"/g, '""')}"`;
    }
    
    return valor;
  }

  private formatDate(data: Date): string {
    const ano = data.getFullYear();
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const dia = data.getDate().toString().padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
  }

  private formatDateBR(data: Date): string {
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  private formatTimestamp(data: Date): string {
    const ano = data.getFullYear();
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const dia = data.getDate().toString().padStart(2, '0');
    const hora = data.getHours().toString().padStart(2, '0');
    const min = data.getMinutes().toString().padStart(2, '0');
    return `${ano}${mes}${dia}-${hora}${min}`;
  }

  private gerarNomeArquivo(tipo: string, periodo?: { inicio: Date; fim: Date }): string {
    const timestamp = this.formatTimestamp(new Date());
    
    if (periodo) {
      const inicio = this.formatDate(periodo.inicio).replace(/-/g, '');
      const fim = this.formatDate(periodo.fim).replace(/-/g, '');
      return `${tipo}-${inicio}-${fim}-v${this.APP_VERSION}-${timestamp}.csv`;
    }
    
    return `${tipo}-v${this.APP_VERSION}-${timestamp}.csv`;
  }

  private download(conteudo: string, nomeArquivo: string, mimeType: string): void {
    const blob = new Blob([conteudo], { type: mimeType });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = nomeArquivo;
    link.click();
    window.URL.revokeObjectURL(url);
  }
}
