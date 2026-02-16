import { Component, signal, computed, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { BarChart, LineChart, PieChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, LegendComponent, TitleComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { AnalyticsService } from '../../core/services/analytics.service';
import { ExportService } from '../../core/services/export.service';
import { FiltrosAnalise, FiltroTempoTipo } from '../../core/models/analytics.model';

// Registrar componentes do ECharts
echarts.use([
  BarChart,
  LineChart,
  PieChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  CanvasRenderer
]);

@Component({
  selector: 'app-painel',
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    ButtonModule,
    TableModule,
    TagModule,
    DatePickerModule,
    SelectModule,
    InputTextModule,
    AnimateOnScrollModule,
    NgxEchartsDirective
  ],
  providers: [provideEchartsCore({ echarts })],
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css'
})
export class PainelComponent implements OnInit {
  private analytics = inject(AnalyticsService);
  private exportService = inject(ExportService);
  private router = inject(Router);

  filtroTempo = signal<FiltroTempoTipo>('tudo');
  dataInicio = signal<Date | null>(null);
  dataFim = signal<Date | null>(null);
  categoriasDisponiveis = signal<string[]>([]);
  categoriasSelecionadas = signal<string[]>([]);
  buscaTexto = signal<string>('');

  kpis = computed(() => this.analytics.calcularKPIs());
  itensVendidos = computed(() => this.analytics.calcularItensVendidos());
  categorias = computed(() => this.analytics.calcularCategorias());
  evolucao = computed(() => this.analytics.calcularEvolucaoTemporal('semana'));
  insights = computed(() => this.analytics.gerarInsights());
  vendas = computed(() => this.analytics.vendasFiltradas());
  totalItens = computed(() => {
    return this.vendas().reduce((total, venda) => {
      return total + venda.itens.reduce((sum, item) => sum + item.quantidade, 0);
    }, 0);
  });

  graficoTopItens = computed(() => this.gerarGraficoTopItens());
  graficoEvolucao = computed(() => this.gerarGraficoEvolucao());
  graficoParticipacao = computed(() => this.gerarGraficoParticipacao());

  ngOnInit(): void {
    const vendas = this.analytics.vendasFiltradas();
    
    if (vendas.length === 0) {
      this.router.navigate(['/analisar']);
      return;
    }

    const tipos = new Set<string>();
    vendas.forEach(v => {
      v.itens.forEach(i => {
        if (i.tipo) tipos.add(i.tipo);
        if (i.categoria) tipos.add(i.categoria);
      });
    });
    this.categoriasDisponiveis.set(Array.from(tipos).sort());
  }

  aplicarFiltroTempo(tipo: FiltroTempoTipo): void {
    this.filtroTempo.set(tipo);
    
    const hoje = new Date();
    let dataInicio: Date | undefined;
    
    switch (tipo) {
      case 'ultima-semana':
        dataInicio = new Date(hoje);
        dataInicio.setDate(hoje.getDate() - 7);
        break;
      case 'ultimo-mes':
        dataInicio = new Date(hoje);
        dataInicio.setMonth(hoje.getMonth() - 1);
        break;
      case 'ultimos-3-meses':
        dataInicio = new Date(hoje);
        dataInicio.setMonth(hoje.getMonth() - 3);
        break;
      case 'tudo':
        dataInicio = undefined;
        break;
    }
    
    const filtros: FiltrosAnalise = {
      tempo: dataInicio ? {
        tipo: tipo,
        dataInicio: dataInicio,
        dataFim: hoje
      } : undefined,
      categorias: this.categoriasSelecionadas().length > 0 ? this.categoriasSelecionadas() : undefined,
      buscaTexto: this.buscaTexto() || undefined
    };
    
    this.analytics.setFiltros(filtros);
  }

  aplicarFiltros(): void {
    const filtros: FiltrosAnalise = {
      tempo: (this.dataInicio() || this.dataFim()) ? {
        tipo: 'custom',
        dataInicio: this.dataInicio() || undefined,
        dataFim: this.dataFim() || undefined
      } : undefined,
      categorias: this.categoriasSelecionadas().length > 0 ? this.categoriasSelecionadas() : undefined,
      buscaTexto: this.buscaTexto() || undefined
    };
    this.analytics.setFiltros(filtros);
  }

  limparFiltros(): void {
    this.dataInicio.set(null);
    this.dataFim.set(null);
    this.categoriasSelecionadas.set([]);
    this.buscaTexto.set('');
    this.analytics.setFiltros({});
  }

  exportarCsvCompleto(): void {
    const vendas = this.vendas();
    const periodo = this.dataInicio() && this.dataFim() 
      ? { inicio: this.dataInicio()!, fim: this.dataFim()! }
      : undefined;
    this.exportService.exportarCsvCompleto(vendas, periodo);
  }

  exportarResumoPorItem(): void {
    const itens = this.itensVendidos();
    const periodo = this.dataInicio() && this.dataFim() 
      ? { inicio: this.dataInicio()!, fim: this.dataFim()! }
      : undefined;
    this.exportService.exportarResumoPorItem(itens, periodo);
  }

  exportarResumoPorCategoria(): void {
    const categorias = this.categorias();
    const periodo = this.dataInicio() && this.dataFim() 
      ? { inicio: this.dataInicio()!, fim: this.dataFim()! }
      : undefined;
    this.exportService.exportarResumoPorCategoria(categorias, periodo);
  }

  getSeveridadeInsight(tipo: 'oportunidade' | 'alerta' | 'info'): 'success' | 'warn' | 'info' {
    if (tipo === 'oportunidade') return 'success';
    if (tipo === 'alerta') return 'warn';
    return 'info';
  }

  private gerarGraficoTopItens(): any {
    const itens = this.itensVendidos().slice(0, 10);
    
    return {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        data: itens.map(i => i.nome).reverse()
      },
      series: [{
        name: 'Receita',
        type: 'bar',
        data: itens.map(i => i.receita).reverse(),
        itemStyle: {
          color: '#3b82f6'
        }
      }]
    };
  }

  private gerarGraficoEvolucao(): any {
    const evolucao = this.evolucao();
    
    return {
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: evolucao.map(e => e.periodo)
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: 'Receita',
        type: 'line',
        data: evolucao.map(e => e.receita),
        smooth: true,
        itemStyle: {
          color: '#10b981'
        },
        areaStyle: {
          color: 'rgba(16, 185, 129, 0.1)'
        }
      }]
    };
  }

  private gerarGraficoParticipacao(): any {
    const categorias = this.categorias().slice(0, 8);
    
    return {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [{
        name: 'Participação',
        type: 'pie',
        radius: '50%',
        data: categorias.map(c => ({
          value: c.receita,
          name: c.nome
        })),
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
    };
  }
}
