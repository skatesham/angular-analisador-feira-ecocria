# 📊 Refatoração do Painel - Feira da Ecocria

## 🎯 Objetivo

Refatorar o Painel para entregar valor real focando em **Categorias e Subcategorias**, com **filtros de tempo chave**, **gráficos adequados** e **análise de qualidade dos dados**.

---

## 📋 Problemas Atuais

1. ❌ Foco em produtos individuais (não faz sentido para o negócio)
2. ❌ Falta de análise por categoria/subcategoria
3. ❌ Filtros de tempo inadequados
4. ❌ Sem análise de qualidade dos dados
5. ❌ Gráficos genéricos sem insights acionáveis

---

## ✅ Nova Estrutura do Painel

### **1. KPIs Principais** (4 cards no topo)

```
┌─────────────────┬─────────────────┬─────────────────┬─────────────────┐
│ Faturamento     │ Ticket Médio    │ Feiras          │ Categorias      │
│ Total           │ por Feira       │ Realizadas      │ Ativas          │
│ R$ 12.450,00    │ R$ 2.490,00     │ 5 feiras        │ 8 categorias    │
│ ↑ +12%          │ ↑ +8%           │ (últimas 5 sem.)│ (vendidas)      │
└─────────────────┴─────────────────┴─────────────────┴─────────────────┘
```

### **2. Filtros de Tempo** (seletor único)

```
[ Última Semana ] [ Último Mês ] [ Últimos 3 Meses ] [ Período Custom ]
```

- **Última Semana**: últimos 7 dias
- **Último Mês**: últimos 30 dias
- **Últimos 3 Meses**: últimos 90 dias
- **Período Custom**: date picker início/fim

### **3. Análise de Qualidade dos Dados** (card de alerta)

```
┌─────────────────────────────────────────────────────────────┐
│ 📊 Qualidade dos Dados                                      │
├─────────────────────────────────────────────────────────────┤
│ ✅ 45 itens categorizados (90%)                             │
│ ⚠️  5 itens sem categoria (10%)                             │
│ ⚠️  2 lacunas de registro (semanas sem feira)               │
│ ✅ Nenhuma inconsistência de preço detectada                │
│                                                             │
│ [Ver Detalhes] [Corrigir Agora]                            │
└─────────────────────────────────────────────────────────────┘
```

### **4. Gráfico 1: Top 5 Categorias por Receita** (barras horizontais)

```
Acessórios    ████████████████████ R$ 4.500 (36%)
Tábuas        ████████████████     R$ 3.200 (26%)
Caixas        ████████████         R$ 2.400 (19%)
Esculturas    ████████             R$ 1.600 (13%)
Brinquedos    ████                 R$ 750 (6%)
```

**Interação**: Clicar em uma barra filtra todo o painel para aquela categoria.

### **5. Gráfico 2: Evolução de Receita por Categoria** (linha temporal)

```
R$
5k │                                    ╱─ Acessórios
   │                          ╱────────╯
4k │                    ╱────╯
   │              ╱────╯
3k │        ╱────╯                ─── Tábuas
   │  ╱────╯
2k │─╯                      ───── Caixas
   │
1k │                  ─────────── Esculturas
   │
   └────────────────────────────────────────────
    Sem 1  Sem 2  Sem 3  Sem 4  Sem 5
```

**Insight**: Mostra tendências de crescimento/queda por categoria ao longo do tempo.

### **6. Gráfico 3: Participação por Categoria** (donut)

```
        ┌─────────────┐
        │  Acessórios │ 36%
        │   Tábuas    │ 26%
        │   Caixas    │ 19%
        │ Esculturas  │ 13%
        │ Brinquedos  │ 6%
        └─────────────┘
```

**Interação**: Clicar em uma fatia filtra todo o painel.

### **7. Tabela: Detalhamento por Subcategoria**

```
┌──────────────┬──────────────┬──────────┬──────────┬──────────┬──────────┐
│ Categoria    │ Subcategoria │ Qtd      │ Receita  │ Part. %  │ Tendência│
├──────────────┼──────────────┼──────────┼──────────┼──────────┼──────────┤
│ Acessórios   │ Chaveiro     │ 45       │ R$ 2.250 │ 18%      │ ↑ +15%   │
│ Acessórios   │ Pingente     │ 30       │ R$ 1.500 │ 12%      │ ↑ +10%   │
│ Acessórios   │ Brinco       │ 25       │ R$ 750   │ 6%       │ → 0%     │
│ Tábuas       │ Pequena      │ 20       │ R$ 2.000 │ 16%      │ ↑ +8%    │
│ Tábuas       │ Média        │ 12       │ R$ 1.200 │ 10%      │ ↓ -5%    │
│ ...          │ ...          │ ...      │ ...      │ ...      │ ...      │
└──────────────┴──────────────┴──────────┴──────────┴──────────┴──────────┘

[Exportar CSV] [Exportar por Categoria] [Exportar Completo]
```

### **8. Seção "O Que Isso Sugere"** (insights acionáveis)

```
┌─────────────────────────────────────────────────────────────┐
│ 💡 O Que Isso Sugere                                        │
├─────────────────────────────────────────────────────────────┤
│ 🎯 TOP OPORTUNIDADES                                        │
│                                                             │
│ • Acessórios são seu carro-chefe (36% da receita)          │
│   → Considere aumentar variedade de chaveiros e pingentes  │
│                                                             │
│ • Tábuas pequenas têm alta demanda (+8% crescimento)       │
│   → Aumente produção para próximas feiras                  │
│                                                             │
│ ⚠️  ALERTAS                                                 │
│                                                             │
│ • 5 itens sem categoria (10% do total)                     │
│   → Categorize para melhorar análise                       │
│                                                             │
│ • 2 semanas sem registro de feira                          │
│   → Verifique se houve feiras não registradas              │
│                                                             │
│ 📈 RECOMENDAÇÕES                                            │
│                                                             │
│ • Foque produção em Acessórios e Tábuas (62% da receita)   │
│ • Considere combos: Tábua + Acessório                      │
│ • Revise preço de Esculturas (baixa participação)          │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔧 Implementação Técnica

### **Modelos de Dados**

```typescript
// Novo modelo focado em categorias
interface CategoriaResumo {
  nome: string;
  subcategorias: SubcategoriaResumo[];
  receita: number;
  quantidade: number;
  participacao: number;
  tendencia: 'alta' | 'baixa' | 'estavel';
  variacao: number;
}

interface SubcategoriaResumo {
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

interface QualidadeDados {
  totalItens: number;
  itensCategorizados: number;
  itensSemCategoria: number;
  percentualQualidade: number;
  lacunasRegistro: number;
  inconsistenciasPreco: number;
  alertas: AlertaQualidade[];
}

interface AlertaQualidade {
  tipo: 'erro' | 'aviso' | 'info';
  mensagem: string;
  detalhes: string;
  acao?: string;
}

interface FiltroTempo {
  tipo: 'ultima-semana' | 'ultimo-mes' | 'ultimos-3-meses' | 'custom';
  dataInicio?: Date;
  dataFim?: Date;
}
```

### **Serviços**

```typescript
// analytics.service.ts
calcularKPIsPorCategoria(filtro: FiltroTempo): KPI[]
obterTopCategorias(limite: number, filtro: FiltroTempo): CategoriaResumo[]
obterEvolucaoCategoria(categoria: string, filtro: FiltroTempo): EvolucaoTemporal[]
obterParticipacaoCategorias(filtro: FiltroTempo): { nome: string; valor: number }[]
obterSubcategorias(categoria?: string, filtro?: FiltroTempo): SubcategoriaResumo[]
analisarQualidadeDados(): QualidadeDados
gerarInsights(filtro: FiltroTempo): InsightAlerta[]
```

---

## 📊 Gráficos ECharts

### **1. Top Categorias (Barras Horizontais)**

```typescript
{
  tooltip: { trigger: 'axis' },
  grid: { left: '20%', right: '10%' },
  xAxis: { type: 'value', name: 'Receita (R$)' },
  yAxis: { type: 'category', data: categorias },
  series: [{
    type: 'bar',
    data: receitas,
    label: { show: true, position: 'right', formatter: '{c}' }
  }]
}
```

### **2. Evolução Temporal (Linha)**

```typescript
{
  tooltip: { trigger: 'axis' },
  legend: { data: categorias },
  xAxis: { type: 'category', data: semanas },
  yAxis: { type: 'value', name: 'Receita (R$)' },
  series: categorias.map(cat => ({
    name: cat,
    type: 'line',
    data: receitasPorSemana[cat],
    smooth: true
  }))
}
```

### **3. Participação (Donut)**

```typescript
{
  tooltip: { trigger: 'item' },
  legend: { orient: 'vertical', left: 'left' },
  series: [{
    type: 'pie',
    radius: ['40%', '70%'],
    data: categorias.map(cat => ({ name: cat.nome, value: cat.receita })),
    label: { formatter: '{b}: {d}%' }
  }]
}
```

---

## ✅ Checklist de Implementação

- [ ] Atualizar modelos de dados (analytics.model.ts)
- [ ] Refatorar AnalyticsService para focar em categorias
- [ ] Criar FiltroTempoComponent (seletor de período)
- [ ] Criar QualidadeDadosComponent (card de análise)
- [ ] Atualizar gráficos para categorias/subcategorias
- [ ] Implementar tabela de subcategorias com paginação
- [ ] Refatorar seção "O que isso sugere"
- [ ] Adicionar interatividade (clicar em gráfico filtra painel)
- [ ] Testar com dados reais
- [ ] Validar responsividade

---

## 🎯 Resultado Esperado

Um painel que:
1. ✅ Mostra **categorias e subcategorias** como foco principal
2. ✅ Permite **filtrar por período** de forma intuitiva
3. ✅ Exibe **análise de qualidade** dos dados importados
4. ✅ Gera **insights acionáveis** baseados em regras determinísticas
5. ✅ Facilita **tomada de decisão** sobre produção e estoque

---

**Prioridade**: Alta  
**Impacto**: Transformar o painel de "genérico" para "ferramenta de decisão"
