# 🚀 i18n Quick Start

## ✅ Status: Implementado

- ✅ Arquivos de tradução: `public/i18n/pt-BR.json` e `public/i18n/en.json`
- ✅ TranslateModule adicionado em todos os componentes
- ✅ Idiomas: Português (BR) e English
- ✅ Troca de idioma via Configurações

---

## 📝 Como Usar nos Templates

### Texto Simples
```html
<h1>{{ 'landing.hero.title' | translate }}</h1>
<p>{{ 'landing.hero.subtitle' | translate }}</p>
```

### Em Botões PrimeNG
```html
<p-button [label]="'landing.hero.cta' | translate" />
<p-button [label]="'common.save' | translate" />
```

### Em Atributos
```html
<input [placeholder]="'common.search' | translate" />
```

---

## 🔑 Chaves Disponíveis

### Navegação
- `nav.home` - Início
- `nav.howItWorks` - Como Funciona
- `nav.settings` - Configurações
- `nav.analyze` - Analisar

### Landing Page
- `landing.hero.title` - Título principal
- `landing.hero.subtitle` - Subtítulo
- `landing.hero.cta` - Botão CTA
- `landing.hero.ctaSecondary` - Botão secundário
- `landing.problem.title` - Título do problema
- `landing.solution.title` - Título da solução
- `landing.howItWorks.title` - Como funciona
- `landing.privacy.title` - Privacidade
- `landing.faq.title` - FAQ
- `landing.cta.title` - CTA final

### Configurações
- `settings.title` - Configurações
- `settings.language.title` - Idioma
- `settings.appearance.title` - Aparência
- `settings.privacy.title` - Privacidade
- `settings.about.title` - Sobre

### Comum
- `common.save` - Salvar
- `common.cancel` - Cancelar
- `common.confirm` - Confirmar
- `common.close` - Fechar
- `common.back` - Voltar
- `common.next` - Próximo

---

## 🔄 Trocar Idioma

### No Component (já implementado em Configurações)
```typescript
import { TranslateService } from '@ngx-translate/core';

export class ConfiguracoesComponent {
  private translate = inject(TranslateService);

  alterarIdioma(idioma: string): void {
    this.translate.use(idioma);
    localStorage.setItem('locale', idioma);
  }
}
```

### Idiomas Disponíveis
- `pt-BR` - Português (Brasil)
- `en` - English

---

## 📦 Adicionar em Novo Componente

### 1. Import no TypeScript
```typescript
import { TranslateModule } from '@ngx-translate/core';

@Component({
  imports: [TranslateModule, ...]
})
```

### 2. Usar no Template
```html
<h1>{{ 'minha.chave' | translate }}</h1>
```

### 3. Adicionar Tradução
**pt-BR.json:**
```json
{
  "minha": {
    "chave": "Meu Texto em Português"
  }
}
```

**en.json:**
```json
{
  "minha": {
    "chave": "My Text in English"
  }
}
```

---

## ✅ Componentes com i18n

- ✅ Landing Feira
- ✅ Como Funciona
- ✅ Configurações
- ✅ Navbar (Landing Layout)
- ⏳ Analisador (adicionar conforme necessário)
- ⏳ Painel (adicionar conforme necessário)

---

## 🎯 Próximos Passos

Para aplicar i18n nos componentes restantes:

1. Adicionar `TranslateModule` nos imports
2. Substituir strings hard-coded por `{{ 'chave' | translate }}`
3. Adicionar traduções em `pt-BR.json` e `en.json`

**Exemplo para Analisador:**
```typescript
// analisador.component.ts
import { TranslateModule } from '@ngx-translate/core';

@Component({
  imports: [..., TranslateModule]
})
```

```html
<!-- analisador.component.html -->
<h1>{{ 'analisador.title' | translate }}</h1>
```

```json
// pt-BR.json
{
  "analisador": {
    "title": "Analisador de Vendas de Feira"
  }
}
```

---

## 📚 Documentação Completa

Ver `I18N_GUIDE.md` para guia completo com todas as chaves e exemplos.
