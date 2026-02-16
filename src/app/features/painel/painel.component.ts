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
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { BarChart, LineChart, PieChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, LegendComponent, TitleComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { AnalyticsService } from '../../core/services/analytics.service';
import { ExportService } from '../../core/services/export.service';
import { StorageService } from '../../core/services/storage.service';
import { AnalisesSalva, ResultadoProcessamento } from '../../core/models/processamento.model';
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
    NgxEchartsDirective,
    ConfirmDialogModule,
    ToastModule
  ],
  providers: [
    provideEchartsCore({ echarts }),
    ConfirmationService,
    MessageService
  ],
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css'
})
export class PainelComponent implements OnInit {
  private analytics = inject(AnalyticsService);
  private exportService = inject(ExportService);
  private storageService = inject(StorageService);
  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);
  private router = inject(Router);

  filtroTempo = signal<FiltroTempoTipo>('tudo');
  dataInicio = signal<Date | null>(null);
  dataFim = signal<Date | null>(null);
  categoriasSelecionadas = signal<string[]>([]);
  buscaTexto = signal<string>('');

  // Filtros da tabela
  filtroTabelaDataInicio: Date | null = null;
  filtroTabelaDataFim: Date | null = null;
  filtroTabelaCategoria: string | null = null;
  filtroTabelaNome: string = '';

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

  totalFeiras = computed(() => {
    const vendas = this.vendas();
    const datasUnicas = new Set(vendas.map(v => v.data.toISOString().split('T')[0]));
    return datasUnicas.size;
  });

  graficoTopCategorias = computed(() => this.gerarGraficoTopItens());
  graficoTopSubcategorias = computed(() => this.gerarGraficoSubcategorias());
  graficoEvolucao = computed(() => this.gerarGraficoEvolucaoPorData());
  graficoParticipacao = computed(() => this.gerarGraficoParticipacao());
  
  subcategoriasDetalhadas = computed(() => this.analytics.calcularTopSubcategorias(50));

  categoriasDisponiveis = computed(() => {
    const vendas = this.vendas();
    const categorias = new Set<string>();
    vendas.forEach(v => {
      v.itens.forEach(i => {
        if (i.tipo) categorias.add(i.tipo);
      });
    });
    return Array.from(categorias).sort().map(c => ({ label: c, value: c }));
  });

  vendasDetalhadas = computed(() => {
    const vendas = this.vendas();
    const detalhes: any[] = [];
    
    vendas.forEach(venda => {
      venda.itens.forEach(item => {
        // Aplicar filtros
        if (this.filtroTabelaDataInicio && venda.data < this.filtroTabelaDataInicio) return;
        if (this.filtroTabelaDataFim && venda.data > this.filtroTabelaDataFim) return;
        if (this.filtroTabelaCategoria && item.tipo !== this.filtroTabelaCategoria) return;
        if (this.filtroTabelaNome && !item.nome.toLowerCase().includes(this.filtroTabelaNome.toLowerCase())) return;
        
        // Filtrar subcategorias sem categoria (se filtro de categoria estiver ativo)
        if (this.filtroTabelaCategoria && !item.categoria) return;
        
        detalhes.push({
          data: venda.data,
          categoria: item.tipo || '-',
          subcategoria: item.categoria || '-',
          nome: item.nome,
          quantidade: item.quantidade,
          receita: item.valorTotal,
          precoUnitario: item.precoUnitario || 0
        });
      });
    });
    
    // Ordenar por receita decrescente
    return detalhes.sort((a, b) => b.receita - a.receita);
  });

  echartsTheme = computed(() => {
    // Detectar se está em dark mode
    const isDark = document.documentElement.classList.contains('dark');
    return isDark ? 'dark' : 'light';
  });

  ngOnInit(): void {
    const vendas = this.analytics.vendasFiltradas();
    
    if (vendas.length === 0) {
      this.router.navigate(['/analisar']);
      return;
    }

    // Categorias já são calculadas no computed categoriasDisponiveis
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

  voltarParaAnalisador(): void {
    this.router.navigate(['/analisar']);
  }

  async salvarAnalise(): Promise<void> {
    const vendas = this.vendas();
    
    const resultado: ResultadoProcessamento = {
      vendas: vendas,
      estatisticas: {
        totalArquivos: 1,
        totalLinhas: vendas.length,
        linhasProcessadas: vendas.length,
        linhasDescartadas: 0,
        linhasCorrigidas: 0,
        vendasGeradas: vendas.length,
        itensProcessados: vendas.reduce((sum, v) => sum + v.itens.length, 0),
        erros: [],
        warnings: []
      },
      logs: [],
      timestamp: new Date(),
      versaoApp: '1.0.0'
    };

    const nome = `Análise ${new Date().toLocaleDateString('pt-BR')} ${new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`;

    try {
      await this.storageService.salvarAnalise(nome, resultado);
      this.messageService.add({
        severity: 'success',
        summary: 'Sucesso',
        detail: 'Análise salva com sucesso!',
        life: 3000
      });
    } catch (error) {
      console.error('Erro ao salvar análise:', error);
      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'Erro ao salvar análise. Tente novamente.',
        life: 5000
      });
    }
  }

  excluirHistorico(): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir TODAS as análises salvas? Esta ação não pode ser desfeita.',
      header: 'Confirmar Exclusão',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim, excluir tudo',
      rejectLabel: 'Cancelar',
      acceptButtonStyleClass: 'p-button-danger',
      accept: async () => {
        try {
          await this.storageService.apagarTudo();
          this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Histórico excluído com sucesso!',
            life: 3000
          });
        } catch (error) {
          console.error('Erro ao excluir histórico:', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao excluir histórico. Tente novamente.',
            life: 5000
          });
        }
      }
    });
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
    const categorias = this.analytics.calcularTopCategorias(5);
    const cores = ['#3b82f6', '#10b981', '#0ea5e9', '#8b5cf6', '#ec4899'];
    
    return {
      title: {
        text: 'Top 5 Categorias por Receita',
        left: 'center',
        textStyle: { fontSize: 16, fontWeight: 'bold' }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
        formatter: (params: any) => {
          const data = params[0];
          return `${data.name}<br/>Receita: R$ ${data.value.toFixed(2)}`;
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '15%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: categorias.map(c => c.nome),
        axisLabel: {
          interval: 0,
          rotate: 0
        }
      },
      yAxis: {
        type: 'value',
        name: 'Receita (R$)',
        axisLabel: {
          formatter: (value: number) => `R$ ${value.toFixed(0)}`
        }
      },
      series: [{
        name: 'Receita',
        type: 'bar',
        data: categorias.map((c, i) => ({
          value: c.receita,
          itemStyle: { color: cores[i] }
        })),
        label: {
          show: true,
          position: 'top',
          formatter: (params: any) => `R$ ${params.value.toFixed(0)}`
        },
        barWidth: '60%'
      }]
    };
  }

  private gerarGraficoSubcategorias(): any {
    const subcategorias = this.analytics.calcularTopSubcategorias(10);
    const cores = ['#10b981', '#14b8a6', '#06b6d4', '#0ea5e9', '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef', '#ec4899'];
    
    return {
      title: {
        text: 'Top 10 Subcategorias por Receita',
        left: 'center',
        textStyle: { fontSize: 16, fontWeight: 'bold' }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
        formatter: (params: any) => {
          const data = params[0];
          return `${data.name}<br/>Receita: R$ ${data.value.toFixed(2)}`;
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '15%',
        top: '15%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: subcategorias.map(s => s.nome),
        axisLabel: {
          interval: 0,
          rotate: 45
        }
      },
      yAxis: {
        type: 'value',
        name: 'Receita (R$)',
        axisLabel: {
          formatter: (value: number) => `R$ ${value.toFixed(0)}`
        }
      },
      series: [{
        name: 'Receita',
        type: 'bar',
        data: subcategorias.map((s, i) => ({
          value: s.receita,
          itemStyle: { color: cores[i] }
        })),
        label: {
          show: true,
          position: 'top',
          formatter: (params: any) => `R$ ${params.value.toFixed(0)}`,
          fontSize: 10
        },
        barWidth: '60%'
      }]
    };
  }

  private gerarGraficoEvolucao(): any {
    const evolucao = this.analytics.calcularEvolucaoPorData();
    
    return {
      title: {
        text: 'Evolução de Vendas por Data',
        left: 'center',
        textStyle: { fontSize: 16, fontWeight: 'bold' }
      },
      tooltip: {
        trigger: 'axis',
        formatter: (params: any) => {
          let result = `${params[0].name}<br/>`;
          params.forEach((param: any) => {
            if (param.seriesName === 'Receita') {
              result += `${param.marker} ${param.seriesName}: R$ ${param.value.toFixed(2)}<br/>`;
            } else {
              result += `${param.marker} ${param.seriesName}: ${param.value}<br/>`;
            }
          });
          return result;
        }
      },
      legend: {
        data: ['Receita', 'Quantidade'],
        top: '10%'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '20%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: evolucao.map(e => {
          const date = new Date(e.data);
          return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}`;
        }),
        axisLabel: { rotate: 45 }
      },
      yAxis: [
        {
          type: 'value',
          name: 'Receita (R$)',
          position: 'left',
          axisLabel: {
            formatter: (value: number) => `R$ ${value.toFixed(0)}`
          }
        },
        {
          type: 'value',
          name: 'Quantidade',
          position: 'right'
        }
      ],
      series: [
        {
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

  private gerarGraficoEvolucaoPorData(): any {
    const evolucao = this.analytics.calcularEvolucaoPorData();
    
    return {
      title: {
        text: 'Evolução de Vendas por Data',
        left: 'center',
        textStyle: { fontSize: 16, fontWeight: 'bold' }
      },
      tooltip: {
        trigger: 'axis',
        formatter: (params: any) => {
          let result = `${params[0].name}<br/>`;
          params.forEach((param: any) => {
            if (param.seriesName === 'Receita') {
              result += `${param.marker} ${param.seriesName}: R$ ${param.value.toFixed(2)}<br/>`;
            } else {
              result += `${param.marker} ${param.seriesName}: ${param.value}<br/>`;
            }
          });
          return result;
        }
      },
      legend: {
        data: ['Receita', 'Quantidade'],
        top: '10%'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        top: '20%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: evolucao.map(e => {
          const date = new Date(e.data);
          return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}`;
        }),
        axisLabel: { rotate: 45 }
      },
      yAxis: [
        {
          type: 'value',
          name: 'Receita (R$)',
          position: 'left',
          axisLabel: {
            formatter: (value: number) => `R$ ${value.toFixed(0)}`
          }
        },
        {
          type: 'value',
          name: 'Quantidade',
          position: 'right'
        }
      ],
      series: [
        {
          name: 'Receita',
          type: 'line',
          data: evolucao.map(e => e.receita),
          smooth: true,
          itemStyle: { color: '#3b82f6' },
          areaStyle: { color: 'rgba(59, 130, 246, 0.1)' }
        },
        {
          name: 'Quantidade',
          type: 'line',
          yAxisIndex: 1,
          data: evolucao.map(e => e.quantidade),
          smooth: true,
          itemStyle: { color: '#10b981' }
        }
      ]
    };
  }

  private gerarGraficoParticipacao(): any {
    const categorias = this.analytics.calcularTopCategorias(8);
    
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
