export const PRODUCT_TYPES: Record<string, string> = {
  'tabua': 'Tábua',
  'kur': 'Kuripe',
  'cuia gamela': 'Cuia Gamela',
  'k ipe': 'Kuripe',
  'tepi': 'Kuripe',
  'chav': 'Acessório',
  'ima': 'Acessório',
  'ping': 'Acessório',
  'brinc': 'Acessório',
  'anel': 'Acessório',
  'colar': 'Acessório',
  'apoio cel': 'Acessório',
  'suporte celular': 'Acessório',
  'impres': 'Encomenda',
  'caix': 'Caixa',
  'pet': 'PET',
  'ecowhe': 'ecowheels',
  'abridor': 'Abridor',
  'laser': 'Laiser',
  'pindura': 'Pindura Chaveiro',
  'pente': 'Pente',
  'potinho': 'Potinho',
  'palito': 'Palito Cabelo',
  'plac': 'Placa',
  'lumina': 'Luminárias',
  'luminá': 'Luminárias',
  'escult': 'Escultura',
  'passaro': 'Escultura',
  'qc': 'Brinquedo',
  'carri': 'Brinquedo',
  'carro': 'Brinquedo',
  'caminh': 'Brinquedo',
  'encome': 'Encomenda',
  'porta': 'Acessório',
  'rapé': 'Rapé',
  'incens': 'Incensário',
  'kuripe': 'Kuripe',
  'amulet': 'Acessório',
  'frame': 'Quadro',
  'box': 'Caixa',
  'rolling': 'Bandeja Rolling',
  'ufo': 'Disco Voador'
};

export const PRODUCT_CATEGORIES: Record<string, string> = {
  'chav': 'Chaveiro',
  'ping': 'Pingente',
  'colar': 'Pingente',
  'brinc': 'Brinco',
  'anel': 'Anel',
  'apoio cel': 'Suporte',
  'suporte celular': 'Suporte',
  'carri': 'Carrinho',
  'carro': 'Carrinho',
  'caminh': 'Carrinho',
  'qc': 'Quebra-cabeça',
  'porta': 'Porta Toalha',
  'amulet': 'Pingente'
};

export const NAO_ENCONTRADO = 'NAO ENCONTRADO';

export interface CategorizationResult {
  tipo: string;
  categoria: string;
  encontrado: boolean;
}

export function categorizeProduct(productDescription: string): CategorizationResult {
  const descLower = productDescription.toLowerCase();
  
  let tipo = '';
  let categoria = '';
  let encontrado = false;

  for (const [key, value] of Object.entries(PRODUCT_TYPES)) {
    if (descLower.includes(key)) {
      tipo = value;
      encontrado = true;
      break;
    }
  }

  for (const [key, value] of Object.entries(PRODUCT_CATEGORIES)) {
    if (descLower.includes(key)) {
      categoria = value;
      break;
    }
  }

  if (!encontrado) {
    tipo = NAO_ENCONTRADO;
  }

  return { tipo, categoria, encontrado };
}
