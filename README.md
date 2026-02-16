# 📊 Analisador de Vendas de Feira

> Sistema web local para análise de vendas de feira. Transforme anotações rápidas em TXT em insights acionáveis com KPIs, gráficos e exports padronizados.

[![Deploy](https://github.com/skatesham/angular-analisador-feira-ecocria/actions/workflows/deploy.yml/badge.svg)](https://github.com/skatesham/angular-analisador-feira-ecocria/actions/workflows/deploy.yml)
[![Angular](https://img.shields.io/badge/Angular-20-red)](https://angular.dev)
[![PrimeNG](https://img.shields.io/badge/PrimeNG-20-blue)](https://primeng.org)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

## 🚀 Demo

**[Ver Demo ao Vivo](https://skatesham.github.io/angular-analisador-feira-ecocria/)**

---

## 📋 Sobre o Projeto

Sistema desenvolvido para **pequenos produtores e ateliês** que vendem em feiras. Permite transformar anotações simples em TXT em análises completas com:

- ✅ **KPIs automáticos** (faturamento, ticket médio, itens vendidos)
- ✅ **Gráficos interativos** (ECharts)
- ✅ **Insights determinísticos** ("O que isso sugere")
- ✅ **Categorização automática** de produtos
- ✅ **Export CSV padronizado**
- ✅ **100% local** - dados não saem do dispositivo
- ✅ **Dark mode** completo
- ✅ **i18n** (pt-BR e English)

---

## 🎯 Funcionalidades

### 📥 **Importação Inteligente**
- Upload múltiplo de arquivos TXT
- Drag & drop
- Suporte a CSV e XLSX (reimport)
- Preview antes de processar

### 🔄 **Processamento Automático**
- Parse de datas em múltiplos formatos
- Categorização de 40+ tipos de produtos
- Consolidação de múltiplos arquivos
- Deduplicação automática
- Relatório de erros e warnings

### 📊 **Painel de Analytics**
- 4 KPIs principais
- 3 gráficos interativos (ECharts)
- Tabela com paginação
- Filtros por período e categoria
- Seção "O que isso sugere" com insights

### 💾 **Export e Privacidade**
- CSV final padronizado (formato brasileiro)
- Resumos por item e categoria
- Sessão privada por padrão
- Opção de salvar localmente (IndexedDB)
- Botão "Apagar todos os dados"

---

## 🛠️ Stack Tecnológica

| Tecnologia | Versão | Uso |
|---|---|---|
| **Angular** | 20 | Framework principal |
| **PrimeNG** | 20.4.0 | Componentes UI |
| **Tailwind CSS** | v4 | Estilização utility-first |
| **ngx-echarts** | 20.0.2 | Gráficos interativos |
| **ngx-translate** | 17.0.0 | Internacionalização |
| **papaparse** | 5.5.3 | Parse de CSV |
| **xlsx** | 0.18.5 | Parse de Excel |
| **uuid** | 13.0.0 | Geração de IDs |

---

## 🚀 Início Rápido

### Instalação

```bash
# Clonar repositório
git clone https://github.com/skatesham/angular-analisador-feira-ecocria.git
cd angular-analisador-feira-ecocria

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm start
# → http://localhost:4200
```

### Build e Deploy

```bash
# Build de produção
npm run build:prod

# Deploy para GitHub Pages (manual)
npm run deploy
```

---

## 📁 Estrutura do Projeto

```
src/app/
├── core/
│   ├── models/              → Modelos de dados (Venda, Item, Analytics)
│   ├── services/
│   │   ├── feira-parser.service.ts      → Parse de TXT de feira
│   │   ├── file-parser.service.ts       → Parse genérico (TXT/CSV/XLSX)
│   │   ├── data-pipeline.service.ts     → Pipeline de processamento
│   │   ├── analytics.service.ts         → Cálculo de KPIs e insights
│   │   ├── export.service.ts            → Export CSV/TSV
│   │   └── storage.service.ts           → IndexedDB
│   └── theme/               → ThemeService (dark mode)
├── features/
│   ├── landing-feira/       → Landing page
│   ├── como-funciona/       → Página "Como Funciona"
│   ├── analisador/          → Upload e processamento
│   ├── painel/              → Dashboard com KPIs e gráficos
│   └── configuracoes/       → Configurações (idioma, tema, privacidade)
├── layouts/
│   └── landing-layout/      → Layout público (navbar + footer)
└── shared/ui/
    └── theme-switcher/      → Toggle light/dark

public/
└── i18n/                    → pt-BR.json, en.json
```

---

## 🎨 Componentes Principais

### **Landing Feira** (`/`)
- Hero com proposta de valor
- Problema → Solução
- Como funciona (3 passos)
- Privacidade (100% local)
- FAQ
- Animações com `pAnimateOnScroll`

### **Como Funciona** (`/como-funciona`)
- Fluxo visual (4 etapas)
- Tabs com exemplos:
  - TXT de entrada
  - CSV final
  - Gráficos e KPIs
  - Categorias automáticas

### **Analisador** (`/analisar`)
- Upload múltiplo (drag & drop)
- Processamento em etapas visíveis
- Estatísticas (arquivos, vendas, itens, linhas)
- Warnings para produtos não categorizados
- Navegação para painel

### **Painel** (`/painel`)
- 4 KPIs principais
- Seção "O que isso sugere" (insights)
- 3 gráficos ECharts:
  - Top 10 produtos (barras)
  - Participação por tipo (donut)
  - Evolução semanal (linha)
- Tabela com paginação
- Botões de export

### **Configurações** (`/configuracoes`)
- Seletor de idioma (pt-BR/en)
- Toggle dark mode
- Informações de privacidade
- **ConfirmDialog** para apagar dados
- **Toast** de feedback

---

## 🔧 Serviços Core

### **FeiraParserService**
- Parse de TXT com regras específicas
- Detecção de datas (DD.MM.YY, DD/MM/YY)
- Parse de linhas "valor quantidade descrição"
- Cálculo de semana ISO 8601
- Dia da semana em português

### **DataPipelineService**
- Consolidação de múltiplos arquivos
- Deduplicação
- Estatísticas de processamento
- Warnings e erros

### **AnalyticsService**
- Cálculo de KPIs
- Insights determinísticos
- Filtros reativos (signals)
- Gráficos ECharts

### **ExportService**
- CSV/TSV formato brasileiro
- Resumos por item e categoria
- Nomeação com período

---

## 🌐 i18n (Internacionalização)

### Idiomas Suportados
- 🇧🇷 Português (Brasil)
- 🇺🇸 English

### Estrutura
```json
{
  "app": { ... },
  "nav": { ... },
  "landing": {
    "hero": { ... },
    "problem": { ... },
    "solution": { ... },
    "howItWorks": { ... },
    "privacy": { ... },
    "faq": { ... }
  },
  "settings": { ... },
  "common": { ... }
}
```

### Uso
```html
<h1>{{ 'landing.hero.title' | translate }}</h1>
<p-button [label]="'common.save' | translate" />
```

**Guias**: Ver `I18N_GUIDE.md` e `I18N_QUICK_START.md`

---

## 🎨 Design System

### Dark Mode
- Tokens semânticos do PrimeNG
- Pares obrigatórios: `bg-surface-0 dark:bg-surface-900`
- Toggle via `ThemeService`
- Persistência no `localStorage`

### Animações
- `pAnimateOnScroll` do PrimeNG 20
- Classes Tailwind: `fade-in-10`, `slide-in-from-*`, `zoom-in-*`, `spin-in-*`
- Duração: `animate-duration-1000`

### Componentes PrimeNG
- **Dialog** - Modais headless
- **ConfirmDialog** - Confirmações com design customizado
- **Toast** - Notificações
- **FileUpload** - Upload com drag & drop
- **Table** - Tabelas com paginação
- **Tabs** - Abas
- **SelectButton** - Seletor de idioma
- **ToggleSwitch** - Toggle dark mode

---

## 📊 Categorização Automática

### Tipos de Produtos (40+)
- Tábua, Caixa, Escultura, Acessório, Kuripe, Brinquedo, Pente, Palito Cabelo, Luminárias, Incensário, etc.

### Categorias (13)
- Chaveiro, Pingente, Brinco, Anel, Porta Toalha, Carrinho, Quebra-cabeça, etc.

**Arquivo**: `src/app/core/models/categorization.model.ts`

---

## 🔒 Privacidade e Segurança

- ✅ **100% local** - processamento no navegador
- ✅ **Sem servidores externos** - nenhum dado enviado
- ✅ **Sessão privada** por padrão
- ✅ **Opt-in para salvar** localmente (IndexedDB)
- ✅ **Botão "Apagar dados"** com confirmação
- ✅ **Sem rastreamento**
- ✅ **Sem cookies de terceiros**

---

## 📚 Documentação Adicional

- **`IMPLEMENTADO.md`** - Guia completo do sistema implementado
- **`PROGRESSO.md`** - Status de implementação detalhado
- **`REFATORACAO.md`** - Documentação da refatoração template → feira
- **`I18N_GUIDE.md`** - Guia completo de i18n
- **`I18N_QUICK_START.md`** - Início rápido i18n
- **`DIALOGS_GUIDE.md`** - Guia de dialogs e confirms
- **`SETUP.md`** - Instruções de setup

---

## 🚀 Deploy

### GitHub Pages (Automático)

O deploy é feito automaticamente via GitHub Actions quando há push na branch `main`.

O workflow faz build e publica os arquivos estáticos na branch `gh-pages`.

**Workflow**: `.github/workflows/deploy.yml`

### Deploy Manual

```bash
# Build de produção
npm run build:prod

# Deploy manual usando gh-pages CLI
npm install -g angular-cli-ghpages
npm run deploy
```

### Configuração no GitHub

1. Vá em **Settings** → **Pages**
2. Em **Source**, selecione **Deploy from a branch**
3. Selecione a branch **gh-pages** e pasta **/ (root)**
4. Clique em **Save**

A aplicação estará disponível em:
**https://skatesham.github.io/angular-analisador-feira-ecocria/**

---

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

---

## 📄 Licença

MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 👨‍💻 Autor

**Ecocria**

- GitHub: [@skatesham](https://github.com/skatesham)
- Projeto: [angular-analisador-feira-ecocria](https://github.com/skatesham/angular-analisador-feira-ecocria)

---

## 🙏 Agradecimentos

- [Angular](https://angular.dev)
- [PrimeNG](https://primeng.org)
- [Tailwind CSS](https://tailwindcss.com)
- [ECharts](https://echarts.apache.org)

---

**Desenvolvido com ❤️ para pequenos produtores e ateliês**
- `generateUuid()` — UUID v4
- `encrypt()` / `decrypt()` — CryptoJS AES
- `storageGet()` / `storageSet()` / `storageRemove()` — localStorage com namespace
- `formatDate()` / `formatNumber()` / `formatCurrency()` — formatação por locale
- Validators reutilizáveis para formulários reativos

## Rotas

| Rota | Layout | Guard | Feature |
|---|---|---|---|
| `/` | LandingLayout | — | Home Landing |
| `/auth/login` | LandingLayout | guestGuard | Login |
| `/app/dashboard` | AppLayout | authGuard | Dashboard |
| `/app/settings` | AppLayout | authGuard | Settings |

## Como Criar uma Nova Feature

1. Criar pasta em `src/app/features/minha-feature/`
2. Criar 3 arquivos: `.component.ts`, `.component.html`, `.component.css`
3. Usar `ChangeDetectionStrategy.OnPush` e standalone component
4. Adicionar rota lazy-loaded em `app.routes.ts`
5. Adicionar traduções em `public/i18n/*.json`
6. **Dark mode**: todo `bg-surface-*` com par `dark:`, todo `text-surface-*` com par `dark:`

### Exemplo de componente

```typescript
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-minha-feature',
  imports: [TranslateModule],
  templateUrl: './minha-feature.component.html',
  styleUrl: './minha-feature.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MinhaFeatureComponent {}
```

### Exemplo de template com dark mode correto

```html
<div class="bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-xl p-6">
  <h1 class="text-surface-900 dark:text-surface-0">{{ 'feature.title' | translate }}</h1>
  <p class="text-surface-500 dark:text-surface-400">{{ 'feature.description' | translate }}</p>
</div>
```

## Pares de Cores (Dark Mode)

| Light | Dark | Uso |
|---|---|---|
| `bg-surface-0` | `dark:bg-surface-900` | Cards, header, footer |
| `bg-surface-50` | `dark:bg-surface-950` | Fundo de página |
| `bg-surface-100` | `dark:bg-surface-800` | Hover, destaque |
| `text-surface-900` | `dark:text-surface-0` | Texto principal |
| `text-surface-700` | `dark:text-surface-200` | Labels |
| `text-surface-500` | `dark:text-surface-400` | Texto secundário |
| `border-surface-200` | `dark:border-surface-700` | Bordas |
| `text-red-500` | `dark:text-red-400` | Erros |

> **Tokens auto-adaptáveis** (não precisam de `dark:`): `bg-primary`, `text-primary`, `border-primary`, `text-primary-contrast`, `text-muted-color`, `border-surface`.

## Scripts

```bash
npm start       # Dev server (http://localhost:4200)
npm run build   # Build de produção
npm run watch   # Build com watch
npm test        # Testes unitários
```
