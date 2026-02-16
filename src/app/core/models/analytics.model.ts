export interface KPI {
  label: string;
  valor: number | string;
  formato: 'moeda' | 'numero' | 'percentual' | 'texto';
  icone?: string;
  tendencia?: {
    valor: number;
    tipo: 'alta' | 'baixa' | 'estavel';
  };
}

export interface ItemVendido {
  nome: string;
  categoria: string;
  quantidade: number;
  receita: number;
  participacao: number;
  precoMedio: number;
  frequencia: number;
}

export interface CategoriaResumo {
  nome: string;
  subcategorias: SubcategoriaResumo[];
  receita: number;
  quantidade: number;
  participacao: number;
  tendencia: 'alta' | 'baixa' | 'estavel';
  variacao: number;
  itens: number;
}

export interface SubcategoriaResumo {
  nome: string;
  categoria: string;
  receita: number;
  quantidade: number;
  participacao: number;
  precoMedio: number;
  frequencia: number;
  tendencia: 'alta' | 'baixa' | 'estavel';
  variacao: number;
}

export interface CategoriaAnalise {
  nome: string;
  receita: number;
  quantidade: number;
  participacao: number;
  itens: number;
}

export interface EvolucaoTemporal {
  periodo: string;
  data: Date;
  receita: number;
  quantidade: number;
  ticketMedio: number;
  feiras: number;
}

export interface QualidadeDados {
  totalItens: number;
  itensCategorizados: number;
  itensSemCategoria: number;
  percentualQualidade: number;
  lacunasRegistro: number;
  inconsistenciasPreco: number;
  alertas: AlertaQualidade[];
}

export interface AlertaQualidade {
  tipo: 'erro' | 'aviso' | 'info';
  mensagem: string;
  detalhes: string;
  acao?: string;
}

export type FiltroTempoTipo = 'ultima-semana' | 'ultimo-mes' | 'ultimos-3-meses' | 'tudo' | 'custom';

export interface FiltroTempo {
  tipo: FiltroTempoTipo;
  dataInicio?: Date;
  dataFim?: Date;
}

export interface FiltrosAnalise {
  tempo?: FiltroTempo;
  categorias?: string[];
  subcategorias?: string[];
  itens?: string[];
  pagamentos?: string[];
  buscaTexto?: string;
}

export interface InsightAlerta {
  tipo: 'oportunidade' | 'alerta' | 'info';
  titulo: string;
  descricao: string;
  metrica: string;
  valor: number | string;
  explicacao: string;
  prioridade: 'alta' | 'media' | 'baixa';
}

export interface DadosGrafico {
  tipo: 'barra' | 'linha' | 'pizza' | 'donut' | 'scatter';
  titulo: string;
  dados: any;
  opcoes?: any;
}

export interface ResumoExport {
  tipo: 'completo' | 'por-item' | 'por-categoria' | 'por-feira';
  dados: any[];
  colunas: string[];
  nomeArquivo: string;
}
