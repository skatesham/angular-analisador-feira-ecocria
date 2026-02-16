# 🌐 Guia de i18n - Analisador de Vendas de Feira

## 📋 Estrutura de Tradução

### Arquivos
- `public/i18n/pt-BR.json` - Português (Brasil)
- `public/i18n/en.json` - English

### Organização
```json
{
  "app": { ... },           // Geral da aplicação
  "nav": { ... },           // Navegação
  "landing": { ... },       // Landing page
  "settings": { ... },      // Configurações
  "common": { ... }         // Comum (botões, ações)
}
```

---

## 🔧 Como Usar

### 1. No Template HTML
```html
<!-- Texto simples -->
<h1>{{ 'landing.hero.title' | translate }}</h1>

<!-- Com binding -->
<p-button [label]="'common.save' | translate" />

<!-- Com interpolação -->
<p>{{ 'landing.hero.subtitle' | translate }}</p>
```

### 2. No Component TypeScript
```typescript
import { TranslateService } from '@ngx-translate/core';

export class MyComponent {
  private translate = inject(TranslateService);

  getMessage(): string {
    return this.translate.instant('landing.hero.title');
  }
}
```

### 3. Imports Necessários
```typescript
import { TranslateModule } from '@ngx-translate/core';

@Component({
  imports: [TranslateModule, ...]
})
```

---

## 📝 Estrutura Completa

### app
```json
{
  "app": {
    "title": "Analisador de Vendas de Feira",
    "loading": "Carregando...",
    "error": "Ocorreu um erro",
    "empty": "Nenhum dado encontrado"
  }
}
```

### nav
```json
{
  "nav": {
    "home": "Início",
    "howItWorks": "Como Funciona",
    "settings": "Configurações",
    "analyze": "Analisar"
  }
}
```

### landing
```json
{
  "landing": {
    "hero": {
      "title": "...",
      "subtitle": "...",
      "cta": "...",
      "ctaSecondary": "...",
      "privacy": "..."
    },
    "problem": {
      "title": "...",
      "item1": "...",
      "item2": "...",
      "item3": "...",
      "item4": "..."
    },
    "solution": { ... },
    "howItWorks": { ... },
    "privacy": { ... },
    "faq": { ... },
    "cta": { ... }
  }
}
```

### settings
```json
{
  "settings": {
    "title": "...",
    "subtitle": "...",
    "language": { ... },
    "appearance": { ... },
    "privacy": { ... },
    "about": { ... }
  }
}
```

### common
```json
{
  "common": {
    "save": "Salvar",
    "cancel": "Cancelar",
    "confirm": "Confirmar",
    "delete": "Excluir",
    "edit": "Editar",
    "add": "Adicionar",
    "search": "Buscar",
    "filter": "Filtrar",
    "back": "Voltar",
    "next": "Próximo",
    "previous": "Anterior",
    "yes": "Sim",
    "no": "Não",
    "close": "Fechar"
  }
}
```

---

## ✅ Checklist de Implementação

### Por Componente

**Landing Feira**
- [ ] Hero section
- [ ] Problema/Solução
- [ ] Como funciona
- [ ] Privacidade
- [ ] FAQ
- [ ] CTA final

**Como Funciona**
- [ ] Título e subtítulo
- [ ] Fluxo visual (4 passos)
- [ ] Tabs (TXT, CSV, Gráficos, Categorias)
- [ ] CTA

**Analisador**
- [ ] Título
- [ ] Instruções de upload
- [ ] Etapas de processamento
- [ ] Estatísticas
- [ ] Mensagens de erro/sucesso

**Painel**
- [ ] Título
- [ ] Labels de KPIs
- [ ] Títulos de gráficos
- [ ] Colunas da tabela
- [ ] Botões de export

**Configurações**
- [ ] Seções (Idioma, Aparência, Privacidade, Sobre)
- [ ] Labels e descrições
- [ ] Mensagens informativas

---

## 🔄 Trocar Idioma

### No Component
```typescript
alterarIdioma(idioma: string): void {
  this.translate.use(idioma);
  localStorage.setItem('locale', idioma);
}
```

### No App Init
```typescript
const savedLocale = localStorage.getItem('locale') || 'pt-BR';
this.translate.use(savedLocale);
```

---

## 📦 Exemplo Completo

### Template
```html
<div>
  <h1>{{ 'landing.hero.title' | translate }}</h1>
  <p>{{ 'landing.hero.subtitle' | translate }}</p>
  <p-button 
    [label]="'landing.hero.cta' | translate" 
    (onClick)="action()"
  />
</div>
```

### Component
```typescript
import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-example',
  imports: [TranslateModule, ButtonModule],
  templateUrl: './example.component.html'
})
export class ExampleComponent {
  private translate = inject(TranslateService);

  action(): void {
    const message = this.translate.instant('common.save');
    console.log(message);
  }
}
```

---

## 🎯 Boas Práticas

1. **Sempre use chaves descritivas**
   - ✅ `landing.hero.title`
   - ❌ `text1`

2. **Organize por seção**
   - Agrupe traduções relacionadas
   - Use hierarquia clara

3. **Mantenha sincronizado**
   - Toda chave em pt-BR deve existir em en
   - Use mesma estrutura em ambos

4. **Evite HTML nas traduções**
   - ✅ Use múltiplas chaves
   - ❌ Não coloque tags HTML no JSON

5. **Teste ambos os idiomas**
   - Verifique se todas as strings aparecem
   - Valide tamanho dos textos (pt vs en)

---

## 🚀 Comandos Úteis

```bash
# Verificar se há chaves faltando
diff <(jq -r 'paths | join(".")' public/i18n/pt-BR.json | sort) \
     <(jq -r 'paths | join(".")' public/i18n/en.json | sort)

# Contar chaves
jq 'paths | length' public/i18n/pt-BR.json
```

---

## 📚 Referências

- [ngx-translate Docs](https://github.com/ngx-translate/core)
- [Angular i18n Guide](https://angular.dev/guide/i18n)
- Arquivos: `public/i18n/*.json`
