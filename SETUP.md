# Setup do Analisador de Vendas de Feira

## 📦 Status Atual

O projeto está **pronto para receber as regras de conversão** e implementar os componentes de UI.

### ✅ Implementado

#### 1. Estrutura de Domínio
- **Models**: `Venda`, `Item`, `Categoria`, `Pagamento`
- **Processamento**: `ArquivoUpload`, `PreviewArquivo`, `ResultadoProcessamento`
- **Analytics**: `KPI`, `ItemVendido`, `CategoriaAnalise`, `InsightAlerta`

Localização: `src/app/core/models/`

#### 2. Serviços Core

- **FileParserService**: Parse de TXT/CSV/XLSX com preview e inferência de schema
- **DataPipelineService**: Pipeline pluggable de conversão (aguardando regras)
- **StorageService**: IndexedDB para persistência local com modo sessão privada
- **AnalyticsService**: Cálculo de KPIs, insights e análises
- **ExportService**: Export de CSV final e resumos

Localização: `src/app/core/services/`

#### 3. Dependências
- ✅ xlsx (processamento XLSX)
- ✅ papaparse (processamento CSV)
- ✅ uuid (geração de IDs)
- ✅ crypto-js (já estava no template)
- ✅ echarts + ngx-echarts (gráficos)
- ✅ PrimeNG 20 (componentes UI)

### 🚧 Aguardando Implementação

#### 1. Regras de Conversão (PRIORIDADE)

Preencher os anexos em `.windsurf/rules/project_rules.md`:

**ANEXO A - Contrato do Formato TXT**
- Sintaxe das anotações rápidas
- Como identificar data/feira/itens/valores
- Exemplos reais de anotações válidas

**ANEXO B - Modelo do CSV Final**
- ✅ Estrutura de colunas definida
- ✅ Regras de validação definidas
- ⏳ Implementação do parser CSV

**ANEXO C - RuleSet de Conversão**
- Dicionário de aliases (itens/categorias)
- Regras de normalização
- Regras de validação e correção

#### 2. Componentes de UI

**Landing Page** (`/`)
- Hero com proposta de valor
- Como funciona (3 passos)
- Exemplos de insights
- FAQ
- CTA: "Analisar minhas vendas"

**Analisador** (`/analisar`)
- Upload múltiplo (drag&drop)
- Preview de arquivos
- Processamento com progresso
- Relatório de erros/warnings

**Painel** (`/painel`)
- KPIs (4 principais)
- Gráficos ECharts (barra, linha, donut)
- Filtros (período, categoria, item)
- Tabela com paginação
- Seção "O que isso sugere" (insights)
- Botões de export

**Histórico** (`/historico`) - Opcional
- Listar análises salvas
- Carregar/Apagar

#### 3. Rotas

Atualizar `src/app/app.routes.ts`:
- `/` → Landing
- `/analisar` → Analisador
- `/painel` → Painel (após processar)
- `/historico` → Histórico (opcional)
- `/privacidade` → Política local-only (opcional)

#### 4. i18n

Criar arquivos de tradução em `public/i18n/`:
- `pt-BR.json` (principal)
- `en.json` (opcional)

Todas as strings visíveis devem usar `TranslateService`.

## 🚀 Como Prosseguir

### Passo 1: Definir Regras de Conversão

Edite `.windsurf/rules/project_rules.md` e preencha:

1. **ANEXO A**: Como são suas anotações de feira em TXT?
   - Exemplo: `15/02 - Feira Bairro - Bolsa croche azul 2x R$45 = R$90`
   - Ou outro formato que você usa

2. **ANEXO C**: Quais itens/categorias você vende?
   - Liste seus produtos e categorias
   - Aliases comuns (ex: "bolsa croche" = "Bolsa de Crochê")

### Passo 2: Implementar Parsers

Após definir as regras, implementar:
- `DataPipelineService.processarTxt()` com regex/parsing específico
- `DataPipelineService.processarCsv()` com validação do modelo
- Normalização de itens/categorias com aliases

### Passo 3: Criar Componentes de UI

Ordem recomendada:
1. Landing (marketing)
2. Analisador (core)
3. Painel (analytics)
4. Histórico (opcional)

### Passo 4: Configurar i18n

Extrair todas as strings e criar arquivos de tradução.

### Passo 5: Testar e Validar

- Testar com arquivos TXT reais
- Validar processamento e analytics
- Testar dark mode e responsividade
- Validar exports

## 📁 Estrutura do Projeto

```
src/app/
├── core/
│   ├── models/
│   │   ├── venda.model.ts           ✅
│   │   ├── processamento.model.ts   ✅
│   │   └── analytics.model.ts       ✅
│   ├── services/
│   │   ├── file-parser.service.ts   ✅
│   │   ├── data-pipeline.service.ts ⏳ (aguardando regras)
│   │   ├── storage.service.ts       ✅
│   │   ├── analytics.service.ts     ✅
│   │   └── export.service.ts        ✅
│   ├── auth/                        ✅ (template)
│   ├── config/                      ✅ (template)
│   ├── http/                        ✅ (template)
│   ├── i18n/                        ✅ (template)
│   ├── theme/                       ✅ (template)
│   └── utils/                       ✅ (template)
├── features/
│   ├── home-landing/                ⏳ (adaptar para landing de vendas)
│   ├── analisador/                  ❌ (criar)
│   ├── painel/                      ❌ (criar)
│   └── historico/                   ❌ (criar - opcional)
├── layouts/
│   ├── landing-layout/              ✅ (template)
│   └── app-layout/                  ✅ (template - adaptar)
└── shared/
    └── ui/                          ✅ (template)
```

## 🎯 Próxima Ação Recomendada

**Defina o formato das suas anotações TXT** editando o ANEXO A em:
`@.windsurf/rules/project_rules.md`

Exemplo de formato a definir:
```txt
15/02/2024 - Feira do Bairro
Bolsa crochê azul - 2x R$45,00 = R$90,00
Necessaire tecido - 1x R$25,00
Total: R$115,00
Pix
```

Ou qualquer outro formato que você usa atualmente.

## 📝 Notas Importantes

1. **Sessão Privada por Padrão**: Dados não são salvos no IndexedDB a menos que o usuário opte por salvar
2. **100% Local**: Nenhuma requisição de rede com dados do usuário
3. **Dark Mode**: Todos os componentes devem suportar light/dark
4. **Responsivo**: Mobile-first obrigatório
5. **Performance**: Otimizado para até 2000 linhas

## 🔗 Referências

- Especificação completa: `.windsurf/rules/project_rules.md`
- Guidelines Angular 20: `.windsurf/rules/guidelines.md`
- Template base: Angular 20 + PrimeNG 20 + Tailwind
