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

    const conteudo = arquivo.conteudo as string;
    const linhas = conteudo.split(/\r?\n/).filter(l => l.trim());
    const totalLinhas = linhas.length - 1; // Subtract header

    if (totalLinhas === 0) {
      erros.push({
        arquivo: arquivo.nome,
        tipo: 'erro',
        mensagem: 'Arquivo CSV vazio'
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

    try {
      // Parse header
      const header = linhas[0].split(',').map(h => h.trim());
      const requiredColumns = ['Data', 'Produto', 'Qnt', 'Total'];
      const missingColumns = requiredColumns.filter(col => !header.includes(col));
      
      if (missingColumns.length > 0) {
        erros.push({
          arquivo: arquivo.nome,
          tipo: 'erro',
          mensagem: `Colunas obrigatórias faltando: ${missingColumns.join(', ')}`
        });
        return {
          vendas,
          erros,
          warnings,
          totalLinhas,
          linhasProcessadas: 0,
          linhasDescartadas: totalLinhas,
          linhasCorrigidas: 0,
          itensProcessados: 0
        };
      }

      // Get column indices
      const dataIdx = header.indexOf('Data');
      const diaIdx = header.indexOf('Dia');
      const produtoIdx = header.indexOf('Produto');
      const tipoIdx = header.indexOf('Tipo');
      const categoriaIdx = header.indexOf('Categoria');
      const localIdx = header.indexOf('Local');
      const qntIdx = header.indexOf('Qnt');
      const totalIdx = header.indexOf('Total');

      let linhasProcessadas = 0;
      let linhasDescartadas = 0;
      let itensProcessados = 0;

      // Group by date to create vendas
      const vendasMap = new Map<string, Venda>();

      for (let i = 1; i < linhas.length; i++) {
        const linha = linhas[i];
        if (!linha.trim()) continue;

        try {
          const cols = linha.split(',').map(c => c.trim());
          
          // Parse data
          const dataStr = cols[dataIdx];
          const dataParts = dataStr.split('/');
          if (dataParts.length !== 3) {
            linhasDescartadas++;
            continue;
          }
          
          const dia = parseInt(dataParts[0]);
          const mes = parseInt(dataParts[1]) - 1; // JS months are 0-indexed
          const ano = parseInt(dataParts[2]);
          const data = new Date(ano, mes, dia);
          
          if (isNaN(data.getTime())) {
            linhasDescartadas++;
            continue;
          }

          // Parse item data
          const produto = cols[produtoIdx] || '';
          const tipo = cols[tipoIdx] || '';
          const categoria = cols[categoriaIdx] === 'nan' ? '' : (cols[categoriaIdx] || '');
          const local = cols[localIdx] || '';
          const quantidade = parseFloat(cols[qntIdx]) || 0;
          const valorTotal = parseFloat(cols[totalIdx]) || 0;

          // Only process items with Local = "FEIRA"
          if (local.toUpperCase() !== 'FEIRA') {
            linhasDescartadas++;
            continue;
          }

          if (!produto || quantidade === 0) {
            linhasDescartadas++;
            continue;
          }

          // Create or get venda for this date
          const vendaKey = `${data.toISOString()}-feira`;
          let venda = vendasMap.get(vendaKey);
          
          if (!venda) {
            venda = {
              id: uuidv4(),
              data,
              dia: diaIdx >= 0 && cols[diaIdx] ? cols[diaIdx] : this.getDiaSemana(data),
              local: 'feira',
              semana: this.getWeekNumber(data),
              ano: data.getFullYear(),
              itens: [],
              valorTotal: 0,
              origem: 'csv',
              arquivoOrigem: arquivo.nome,
              incompleto: false
            };
            vendasMap.set(vendaKey, venda);
          }

          // Add item to venda
          const item: Item = {
            id: uuidv4(),
            nome: produto,
            tipo: tipo || 'NAO ENCONTRADO',
            categoria: categoria || '',
            quantidade,
            precoUnitario: quantidade > 0 ? valorTotal / quantidade : 0,
            valorTotal
          };

          venda.itens.push(item);
          venda.valorTotal += valorTotal;
          
          if (!tipo || tipo === 'NAO ENCONTRADO') {
            venda.incompleto = true;
          }

          linhasProcessadas++;
          itensProcessados++;

        } catch (error) {
          linhasDescartadas++;
          warnings.push({
            arquivo: arquivo.nome,
            tipo: 'warning',
            mensagem: `Linha ${i + 1}: ${error instanceof Error ? error.message : 'Erro ao processar'}`
          });
        }
      }

      vendas.push(...Array.from(vendasMap.values()));

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
        mensagem: error instanceof Error ? error.message : 'Erro ao processar arquivo CSV'
      });

      return {
        vendas,
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

  private getDiaSemana(data: Date): string {
    const dias = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
    return dias[data.getDay()];
  }

  private getWeekNumber(date: Date): number {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
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
