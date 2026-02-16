import { Venda } from './venda.model';

export type TipoArquivo = 'txt' | 'csv' | 'xlsx';

export interface ArquivoUpload {
  id: string;
  nome: string;
  tipo: TipoArquivo;
  tamanho: number;
  conteudo: string | ArrayBuffer;
  encoding?: string;
  timestamp: Date;
}

export interface ErroProcessamento {
  arquivo: string;
  linha?: number;
  tipo: 'erro' | 'warning';
  mensagem: string;
  campo?: string;
  valorOriginal?: string;
}

export interface EstatisticasProcessamento {
  totalArquivos: number;
  totalLinhas: number;
  linhasProcessadas: number;
  linhasDescartadas: number;
  linhasCorrigidas: number;
  vendasGeradas: number;
  itensProcessados: number;
  erros: ErroProcessamento[];
  warnings: ErroProcessamento[];
}

export interface SchemaInferido {
  colunas: string[];
  tipos: Record<string, 'string' | 'number' | 'date' | 'boolean'>;
  obrigatorios: string[];
  exemplos: Record<string, string[]>;
}

export interface PreviewArquivo {
  arquivo: ArquivoUpload;
  schema?: SchemaInferido;
  amostra: string[][];
  totalLinhas: number;
  encoding: string;
  valido: boolean;
  erros: ErroProcessamento[];
}

export interface ResultadoProcessamento {
  vendas: Venda[];
  estatisticas: EstatisticasProcessamento;
  logs: string[];
  timestamp: Date;
  versaoApp: string;
}

export interface AnalisesSalva {
  id: string;
  nome: string;
  resultado: ResultadoProcessamento;
  dataInicio: Date;
  dataFim: Date;
  totalVendas: number;
  valorTotal: number;
  timestamp: Date;
}
