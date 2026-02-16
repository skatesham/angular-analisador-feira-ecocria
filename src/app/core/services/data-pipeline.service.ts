import { Injectable, inject } from '@angular/core';
import { ArquivoUpload, EstatisticasProcessamento, ErroProcessamento, ResultadoProcessamento } from '../models/processamento.model';
import { Venda, Item } from '../models/venda.model';
import { FeiraParserService } from './feira-parser.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DataPipelineService {
  private readonly APP_VERSION = '1.0.0';
  private feiraParser = inject(FeiraParserService);

  async processarArquivos(arquivos: ArquivoUpload[]): Promise<ResultadoProcessamento> {
    const vendas: Venda[] = [];
    const logs: string[] = [];
    const erros: ErroProcessamento[] = [];
    const warnings: ErroProcessamento[] = [];

    let totalLinhas = 0;
    let linhasProcessadas = 0;
    let linhasDescartadas = 0;
    let linhasCorrigidas = 0;
    let itensProcessados = 0;

    logs.push(`Iniciando processamento de ${arquivos.length} arquivo(s)`);

    for (const arquivo of arquivos) {
      logs.push(`Processando arquivo: ${arquivo.nome}`);
      
      try {
        const resultado = await this.processarArquivo(arquivo);
        
        vendas.push(...resultado.vendas);
        erros.push(...resultado.erros);
        warnings.push(...resultado.warnings);
        
        totalLinhas += resultado.totalLinhas;
        linhasProcessadas += resultado.linhasProcessadas;
        linhasDescartadas += resultado.linhasDescartadas;
        linhasCorrigidas += resultado.linhasCorrigidas;
        itensProcessados += resultado.itensProcessados;
        
        logs.push(`✓ ${arquivo.nome}: ${resultado.vendas.length} venda(s) processada(s)`);
      } catch (error) {
        const mensagem = error instanceof Error ? error.message : 'Erro desconhecido';
        erros.push({
          arquivo: arquivo.nome,
          tipo: 'erro',
          mensagem
        });
        logs.push(`✗ ${arquivo.nome}: ${mensagem}`);
      }
    }

    const vendasDeduplicadas = this.deduplicate(vendas);
    if (vendasDeduplicadas.length < vendas.length) {
      const removidas = vendas.length - vendasDeduplicadas.length;
      logs.push(`Removidas ${removidas} venda(s) duplicada(s)`);
    }

    const estatisticas: EstatisticasProcessamento = {
      totalArquivos: arquivos.length,
      totalLinhas,
      linhasProcessadas,
      linhasDescartadas,
      linhasCorrigidas,
      vendasGeradas: vendasDeduplicadas.length,
      itensProcessados,
      erros,
      warnings
    };

    logs.push(`Processamento concluído: ${vendasDeduplicadas.length} venda(s) final(is)`);

    return {
      vendas: vendasDeduplicadas,
      estatisticas,
      logs,
      timestamp: new Date(),
      versaoApp: this.APP_VERSION
    };
  }

  private async processarArquivo(arquivo: ArquivoUpload): Promise<{
    vendas: Venda[];
    erros: ErroProcessamento[];
    warnings: ErroProcessamento[];
    totalLinhas: number;
    linhasProcessadas: number;
    linhasDescartadas: number;
    linhasCorrigidas: number;
    itensProcessados: number;
  }> {
    switch (arquivo.tipo) {
      case 'txt':
        return this.processarTxt(arquivo);
      case 'csv':
        return this.processarCsv(arquivo);
      case 'xlsx':
        return this.processarXlsx(arquivo);
      default:
        throw new Error(`Tipo de arquivo não suportado: ${arquivo.tipo}`);
    }
  }

  private processarTxt(arquivo: ArquivoUpload): {
    vendas: Venda[];
    erros: ErroProcessamento[];
    warnings: ErroProcessamento[];
    totalLinhas: number;
    linhasProcessadas: number;
    linhasDescartadas: number;
    linhasCorrigidas: number;
    itensProcessados: number;
  } {
    const erros: ErroProcessamento[] = [];
    const warnings: ErroProcessamento[] = [];

    const conteudo = arquivo.conteudo as string;
    const linhas = conteudo.split(/\r?\n/).filter(l => l.trim());
    const totalLinhas = linhas.length;

    try {
      const vendas = this.feiraParser.parseFeiraFile(conteudo, arquivo.nome);
      
      const linhasProcessadas = vendas.reduce((sum, v) => sum + v.itens.length, 0);
      const itensProcessados = vendas.reduce((sum, v) => sum + v.itens.length, 0);
      const linhasDescartadas = totalLinhas - linhasProcessadas;
      
      const vendasIncompletas = vendas.filter(v => v.incompleto);
      if (vendasIncompletas.length > 0) {
        warnings.push({
          arquivo: arquivo.nome,
          tipo: 'warning',
          mensagem: `${vendasIncompletas.length} venda(s) com produtos não categorizados`
        });
      }

      return {
        vendas,
        erros,
        warnings,
        totalLinhas,
        linhasProcessadas,
        linhasDescartadas,
        linhasCorrigidas: 0,
        itensProcessados
      };
    } catch (error) {
      erros.push({
        arquivo: arquivo.nome,
        tipo: 'erro',
        mensagem: error instanceof Error ? error.message : 'Erro ao processar arquivo TXT'
      });

      return {
        vendas: [],
        erros,
        warnings,
        totalLinhas,
        linhasProcessadas: 0,
        linhasDescartadas: totalLinhas,
        linhasCorrigidas: 0,
        itensProcessados: 0
      };
    }
  }

  private processarCsv(arquivo: ArquivoUpload): {
    vendas: Venda[];
    erros: ErroProcessamento[];
    warnings: ErroProcessamento[];
    totalLinhas: number;
    linhasProcessadas: number;
    linhasDescartadas: number;
    linhasCorrigidas: number;
    itensProcessados: number;
  } {
    const vendas: Venda[] = [];
    const erros: ErroProcessamento[] = [];
    const warnings: ErroProcessamento[] = [];

    warnings.push({
      arquivo: arquivo.nome,
      tipo: 'warning',
      mensagem: 'Processamento CSV aguardando modelo de CSV final'
    });

    return {
      vendas,
      erros,
      warnings,
      totalLinhas: 0,
      linhasProcessadas: 0,
      linhasDescartadas: 0,
      linhasCorrigidas: 0,
      itensProcessados: 0
    };
  }

  private processarXlsx(arquivo: ArquivoUpload): {
    vendas: Venda[];
    erros: ErroProcessamento[];
    warnings: ErroProcessamento[];
    totalLinhas: number;
    linhasProcessadas: number;
    linhasDescartadas: number;
    linhasCorrigidas: number;
    itensProcessados: number;
  } {
    const vendas: Venda[] = [];
    const erros: ErroProcessamento[] = [];
    const warnings: ErroProcessamento[] = [];

    warnings.push({
      arquivo: arquivo.nome,
      tipo: 'warning',
      mensagem: 'Processamento XLSX aguardando conversão para CSV'
    });

    return {
      vendas,
      erros,
      warnings,
      totalLinhas: 0,
      linhasProcessadas: 0,
      linhasDescartadas: 0,
      linhasCorrigidas: 0,
      itensProcessados: 0
    };
  }

  private deduplicate(vendas: Venda[]): Venda[] {
    const seen = new Set<string>();
    return vendas.filter(venda => {
      const key = `${venda.data.toISOString()}-${venda.local}-${venda.valorTotal}`;
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
  }

  normalizarItem(nome: string): string {
    return nome.trim().toLowerCase();
  }

  normalizarCategoria(categoria: string): string {
    return categoria.trim().toLowerCase();
  }
}
