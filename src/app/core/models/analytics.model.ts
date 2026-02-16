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

export interface FiltrosAnalise {
  dataInicio?: Date;
  dataFim?: Date;
  categorias?: string[];
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
