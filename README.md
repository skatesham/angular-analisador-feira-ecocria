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
| @ngx-translate | v17 | Internacionalização (i18n) |
| ECharts + ngx-echarts | 6 / 20 | Gráficos |
| uuid | v4 | Geração de IDs |
| crypto-js | latest | Utilitários de criptografia |

## Início Rápido

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm start
# → http://localhost:4200

# Build de produção
npm run build
```

## Estrutura do Projeto

```
src/app/
  core/
    config/         → Environments (dev/prod) + AppConfigService + primeng.config.ts
    http/           → Interceptors (auth token + error handling)
    auth/           → AuthService + Guards (auth, guest, role)
    i18n/           → LocaleService + translate loader
    theme/          → ThemeService (light/dark com persistência)
    utils/          → uuid, crypto, storage, formatters, validation
  layouts/
    landing-layout/ → Layout público (navbar + footer)
    app-layout/     → Layout autenticado (navbar + sidebar mobile)
  features/
    home-landing/   → Página inicial pública (com AnimateOnScroll)
    auth/login/     → Formulário de login com validação
    dashboard/      → Dashboard com métricas, ECharts, Dialog, ConfirmDialog
    settings/       → Configurações (tema + idioma)
  shared/ui/
    theme-switcher/    → Botão toggle light/dark
    country-selector/  → Select de idioma/locale
public/
  i18n/             → pt-BR.json, en-US.json
```

## Funcionalidades Prontas

### Layouts
- **LandingLayout** — público, com navbar e footer
- **AppLayout** — autenticado, com navbar, sidebar mobile (drawer) e guards

### Autenticação
- `AuthService` com signals (token, user, roles)
- `authGuard` — protege rotas `/app/*`
- `guestGuard` — redireciona logados de `/auth/*`
- `roleGuard` — controle por roles/permissões

### Configuração PrimeNG
- **Arquivo centralizado**: `src/app/core/config/primeng.config.ts`
- **Tradução PT-BR completa** — todos os componentes (DataTable, Calendar, FileUpload, etc.)
- **Z-index configurado** — modals (1100), tooltips (1150)
- **Overlays em body** — evita problemas com overflow
- **Ripple ativado** por padrão (Material preset sobrescreve)
- **Filter modes** — configuração para DataTable (text, numeric, date)

### Dark Mode
- Toggle via `ThemeService` (persiste no `localStorage`)
- PrimeNG Aura com `darkModeSelector: '.dark'`
- Tailwind custom variant: `@custom-variant dark (&:where(.dark, .dark *))`
- **Regra**: todo `bg-surface-*` / `text-surface-*` / `border-surface-*` deve ter par `dark:`

### i18n
- `@ngx-translate/core` v17 com HTTP loader
- Arquivos em `public/i18n/` (pt-BR, en-US)
- `LocaleService` com persistência e country selector
- Toda string visível passa por `| translate`

### Animações (AnimateOnScroll)
- Diretiva `pAnimateOnScroll` do PrimeNG com classes Tailwind
- Padrão: `enterClass="animate-enter fade-in-10 [EFEITO] animate-duration-1000"`
- Efeitos por contexto: slide lateral (cards grid), slide vertical alternado (testimonials), spin/zoom (métricas)
- Exemplo aplicado na **Home Landing** (feature cards) e **Dashboard** (metric cards, charts)

### Componentes PrimeNG Integrados
- **Dialog** — modal responsivo com breakpoints e i18n
- **ConfirmDialog** — confirmação com Toast feedback
- **Toast** — notificações de sucesso/erro
- **Drawer** — sidebar mobile no AppLayout

### Gráficos (ECharts)
- `ngx-echarts` v20 com ECharts 6
- Gráfico de barras + linha (Revenue vs Expenses)
- Gráfico de pizza (Traffic Sources)
- Adaptação automática ao dark mode via `ThemeService.isDark`

### HTTP
- `authInterceptor` — injeta Bearer token
- `errorInterceptor` — trata erros 401/403/500

### Utilitários (`core/utils/`)
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
