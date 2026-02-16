import { Injectable, computed, signal } from '@angular/core';
import { Venda } from '../models/venda.model';
import { 
  KPI, 
  ItemVendido, 
  CategoriaAnalise, 
  EvolucaoTemporal, 
  FiltrosAnalise,
  InsightAlerta 
} from '../models/analytics.model';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private vendas = signal<Venda[]>([]);
  private filtros = signal<FiltrosAnalise>({});

  vendasFiltradas = computed(() => {
    const vendas = this.vendas();
    const filtros = this.filtros();

    return vendas.filter(venda => {
      if (filtros.dataInicio && venda.data < filtros.dataInicio) return false;
      if (filtros.dataFim && venda.data > filtros.dataFim) return false;
      
      if (filtros.categorias && filtros.categorias.length > 0) {
        const temCategoria = venda.itens.some(item => 
          filtros.categorias!.includes(item.categoria) || 
          filtros.categorias!.includes(item.tipo)
        );
        if (!temCategoria) return false;
      }
      
      if (filtros.itens && filtros.itens.length > 0) {
        const temItem = venda.itens.some(item => 
          filtros.itens!.includes(item.nome)
        );
        if (!temItem) return false;
      }
      
      if (filtros.buscaTexto) {
        const busca = filtros.buscaTexto.toLowerCase();
        const temTexto = venda.itens.some(item => 
          item.nome.toLowerCase().includes(busca) ||
          item.categoria.toLowerCase().includes(busca)
        );
        if (!temTexto) return false;
      }
      
      return true;
    });
  });

  setVendas(vendas: Venda[]): void {
    this.vendas.set(vendas);
  }

  setFiltros(filtros: FiltrosAnalise): void {
    this.filtros.set(filtros);
  }

  calcularKPIs(): KPI[] {
    const vendas = this.vendasFiltradas();
    
    const faturamentoTotal = vendas.reduce((sum, v) => sum + v.valorTotal, 0);
    const datasUnicas = new Set(vendas.map(v => v.data.toISOString().split('T')[0]));
    const totalFeiras = datasUnicas.size;
    const ticketMedio = totalFeiras > 0 ? faturamentoTotal / totalFeiras : 0;
    const totalItens = vendas.reduce((sum, v) => 
      sum + v.itens.reduce((s, i) => s + i.quantidade, 0), 0
    );

    return [
      {
        label: 'Faturamento Total',
        valor: faturamentoTotal,
        formato: 'moeda',
        icone: 'pi-dollar'
      },
      {
        label: 'Feiras Registradas',
        valor: totalFeiras,
        formato: 'numero',
        icone: 'pi-calendar'
      },
      {
        label: 'Ticket Médio por Feira',
        valor: ticketMedio,
        formato: 'moeda',
        icone: 'pi-chart-line'
      },
      {
        label: 'Itens Vendidos',
        valor: totalItens,
        formato: 'numero',
        icone: 'pi-shopping-cart'
      }
    ];
  }

  calcularItensVendidos(): ItemVendido[] {
    const vendas = this.vendasFiltradas();
    const itensMap = new Map<string, {
      categoria: string;
      quantidade: number;
      receita: number;
      precos: number[];
      frequencia: number;
    }>();

    vendas.forEach(venda => {
      venda.itens.forEach(item => {
        const key = item.nome;
        const existing = itensMap.get(key);
        
        if (existing) {
          existing.quantidade += item.quantidade;
          existing.receita += item.valorTotal;
          if (item.precoUnitario) {
            existing.precos.push(item.precoUnitario);
          }
          existing.frequencia++;
        } else {
          itensMap.set(key, {
            categoria: item.tipo || item.categoria,
            quantidade: item.quantidade,
            receita: item.valorTotal,
            precos: item.precoUnitario ? [item.precoUnitario] : [],
            frequencia: 1
          });
        }
      });
    });

    const receitaTotal = Array.from(itensMap.values()).reduce((sum, i) => sum + i.receita, 0);

    return Array.from(itensMap.entries()).map(([nome, dados]) => ({
      nome,
      categoria: dados.categoria,
      quantidade: dados.quantidade,
      receita: dados.receita,
      participacao: receitaTotal > 0 ? (dados.receita / receitaTotal) * 100 : 0,
      precoMedio: dados.precos.length > 0 
        ? dados.precos.reduce((sum, p) => sum + p, 0) / dados.precos.length 
        : 0,
      frequencia: dados.frequencia
    })).sort((a, b) => b.receita - a.receita);
  }

  calcularCategorias(): CategoriaAnalise[] {
    const vendas = this.vendasFiltradas();
    const categoriasMap = new Map<string, {
      receita: number;
      quantidade: number;
      itens: Set<string>;
    }>();

    vendas.forEach(venda => {
      venda.itens.forEach(item => {
        const existing = categoriasMap.get(item.categoria);
        
        if (existing) {
          existing.receita += item.valorTotal;
          existing.quantidade += item.quantidade;
          existing.itens.add(item.nome);
        } else {
          categoriasMap.set(item.categoria, {
            receita: item.valorTotal,
            quantidade: item.quantidade,
            itens: new Set([item.nome])
          });
        }
      });
    });

    const receitaTotal = Array.from(categoriasMap.values()).reduce((sum, c) => sum + c.receita, 0);

    return Array.from(categoriasMap.entries()).map(([nome, dados]) => ({
      nome,
      receita: dados.receita,
      quantidade: dados.quantidade,
      participacao: receitaTotal > 0 ? (dados.receita / receitaTotal) * 100 : 0,
      itens: dados.itens.size
    })).sort((a, b) => b.receita - a.receita);
  }

  calcularEvolucaoTemporal(agrupamento: 'semana' | 'mes' = 'semana'): EvolucaoTemporal[] {
    const vendas = this.vendasFiltradas();
    const evolucaoMap = new Map<string, {
      data: Date;
      receita: number;
      quantidade: number;
      feiras: Set<string>;
    }>();

    vendas.forEach(venda => {
      const key = agrupamento === 'semana' 
        ? `${venda.ano}-W${venda.semana.toString().padStart(2, '0')}`
        : `${venda.ano}-${(venda.data.getMonth() + 1).toString().padStart(2, '0')}`;
      
      const existing = evolucaoMap.get(key);
      const quantidade = venda.itens.reduce((sum, i) => sum + i.quantidade, 0);
      
      if (existing) {
        existing.receita += venda.valorTotal;
        existing.quantidade += quantidade;
        existing.feiras.add(`${venda.ano}-${venda.semana}`);
      } else {
        evolucaoMap.set(key, {
          data: venda.data,
          receita: venda.valorTotal,
          quantidade,
          feiras: new Set([`${venda.ano}-${venda.semana}`])
        });
      }
    });

    return Array.from(evolucaoMap.entries())
      .map(([periodo, dados]) => ({
        periodo,
        data: dados.data,
        receita: dados.receita,
        quantidade: dados.quantidade,
        ticketMedio: dados.feiras.size > 0 ? dados.receita / dados.feiras.size : 0,
        feiras: dados.feiras.size
      }))
      .sort((a, b) => a.data.getTime() - b.data.getTime());
  }

  gerarInsights(): InsightAlerta[] {
    const insights: InsightAlerta[] = [];
    const vendas = this.vendasFiltradas();
    
    if (vendas.length === 0) return insights;

    const itens = this.calcularItensVendidos();
    const categorias = this.calcularCategorias();

    if (itens.length > 0 && itens[0].participacao > 40) {
      insights.push({
        tipo: 'alerta',
        titulo: 'Concentração alta em um item',
        descricao: `O item "${itens[0].nome}" representa ${itens[0].participacao.toFixed(1)}% da receita`,
        metrica: 'participacao_item',
        valor: itens[0].participacao,
        explicacao: 'Alta dependência de um único produto pode ser arriscado',
        prioridade: 'alta'
      });
    }

    if (categorias.length > 0 && categorias[0].participacao > 50) {
      insights.push({
        tipo: 'alerta',
        titulo: 'Concentração alta em uma categoria',
        descricao: `A categoria "${categorias[0].nome}" representa ${categorias[0].participacao.toFixed(1)}% da receita`,
        metrica: 'participacao_categoria',
        valor: categorias[0].participacao,
        explicacao: 'Considere diversificar o portfólio de produtos',
        prioridade: 'media'
      });
    }

    const itensRaros = itens.filter(i => i.frequencia <= 2);
    if (itensRaros.length > 0) {
      insights.push({
        tipo: 'info',
        titulo: 'Itens com baixa recorrência',
        descricao: `${itensRaros.length} item(ns) vendido(s) apenas 1-2 vezes`,
        metrica: 'itens_raros',
        valor: itensRaros.length,
        explicacao: 'Avalie se vale manter esses itens no catálogo',
        prioridade: 'baixa'
      });
    }

    const itensCampeoes = itens.slice(0, 3);
    if (itensCampeoes.length > 0) {
      insights.push({
        tipo: 'oportunidade',
        titulo: 'Itens campeões de venda',
        descricao: `Top 3: ${itensCampeoes.map(i => i.nome).join(', ')}`,
        metrica: 'top_itens',
        valor: itensCampeoes.length,
        explicacao: 'Garanta estoque adequado desses produtos',
        prioridade: 'alta'
      });
    }

    return insights;
  }
}
