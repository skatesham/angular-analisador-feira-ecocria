export interface Item {
  id: string;
  nome: string;
  tipo: string;
  categoria: string;
  caracteristica?: string;
  material1?: string;
  material2?: string;
  quantidade: number;
  precoUnitario?: number;
  valorTotal: number;
}

export interface Pagamento {
  tipo: 'dinheiro' | 'pix' | 'cartao' | 'outro';
  valor: number;
}

export interface Venda {
  id: string;
  data: Date;
  dia: string;
  local: string;
  semana: number;
  ano: number;
  itens: Item[];
  valorTotal: number;
  observacoes?: string;
  incompleto?: boolean;
  origem: 'txt' | 'csv' | 'xlsx';
  arquivoOrigem: string;
}

export interface Categoria {
  nome: string;
  hierarquia?: string[];
  itensAssociados: string[];
}
