# 🎨 Guia de Dialogs e Confirms - Analisador de Feira

## ✅ Implementado

### **Configurações** - ConfirmDialog para Apagar Dados

**Localização**: `/configuracoes`

**Funcionalidade**: Confirmação antes de apagar todos os dados salvos

**Componentes Usados**:
- `ConfirmDialogModule` - Dialog de confirmação
- `ToastModule` - Feedback de sucesso
- `ConfirmationService` - Serviço de confirmação
- `MessageService` - Serviço de mensagens

**Código**:
```typescript
// Component
confirmarLimparDados(event: Event): void {
  this.confirmationService.confirm({
    target: event.target as EventTarget,
    header: 'Apagar Todos os Dados',
    message: 'Tem certeza que deseja apagar todos os dados salvos? Esta ação não pode ser desfeita.',
    icon: 'pi pi-exclamation-triangle',
    acceptLabel: 'Sim, Apagar',
    rejectLabel: 'Cancelar',
    acceptButtonStyleClass: 'p-button-danger',
    accept: () => {
      this.limparTodosDados();
    }
  });
}
```

**Template**:
```html
<!-- Botão -->
<p-button 
  label="Apagar Todos os Dados" 
  icon="pi pi-trash"
  severity="danger"
  [outlined]="true"
  (onClick)="confirmarLimparDados($event)"
/>

<!-- ConfirmDialog Headless -->
<p-confirmdialog>
  <ng-template #headless let-message let-onAccept="onAccept" let-onReject="onReject">
    @if (message) {
      <div class="flex flex-col items-center p-8 bg-surface-0 dark:bg-surface-900 rounded-2xl">
        <div class="rounded-full bg-red-500 text-white inline-flex justify-center items-center h-20 w-20 -mt-18">
          <i class="pi pi-exclamation-triangle !text-4xl"></i>
        </div>
        <span class="font-bold text-2xl block mb-2 mt-6 text-surface-900 dark:text-surface-0">
          {{ message.header }}
        </span>
        <p class="text-surface-600 dark:text-surface-300 text-center mb-0">
          {{ message.message }}
        </p>
        <div class="flex items-center gap-3 mt-6">
          <p-button 
            [label]="message.rejectLabel || 'Cancelar'" 
            [outlined]="true" 
            severity="secondary" 
            (onClick)="onReject()" 
          />
          <p-button 
            [label]="message.acceptLabel || 'Confirmar'" 
            severity="danger" 
            (onClick)="onAccept()" 
          />
        </div>
      </div>
    }
  </ng-template>
</p-confirmdialog>

<!-- Toast -->
<p-toast />
```

---

## 🎯 Casos de Uso Potenciais

### 1. **Analisador** - Preview de Arquivos

**Quando**: Antes de processar arquivos enviados

**Dialog**: Mostrar preview dos arquivos detectados com estatísticas

```typescript
// Exemplo
showPreview(): void {
  this.dialogVisible.set(true);
}
```

### 2. **Painel** - Detalhes de Produto

**Quando**: Clicar em um produto na tabela

**Dialog**: Mostrar histórico completo de vendas do produto

### 3. **Painel** - Limpar Sessão

**Quando**: Botão "Processar Outros Arquivos"

**ConfirmDialog**: Confirmar antes de limpar dados atuais

### 4. **Analisador** - Cancelar Processamento

**Quando**: Processamento em andamento

**ConfirmDialog**: Confirmar cancelamento

---

## 📦 Como Adicionar em Outros Componentes

### 1. Imports Necessários
```typescript
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  imports: [ConfirmDialogModule, DialogModule, ToastModule, ...],
  providers: [ConfirmationService, MessageService]
})
```

### 2. Injetar Serviços
```typescript
private confirmationService = inject(ConfirmationService);
private messageService = inject(MessageService);
```

### 3. Usar ConfirmDialog
```typescript
confirmar(event: Event): void {
  this.confirmationService.confirm({
    target: event.target as EventTarget,
    header: 'Título',
    message: 'Mensagem de confirmação',
    icon: 'pi pi-exclamation-triangle',
    acceptLabel: 'Sim',
    rejectLabel: 'Não',
    accept: () => {
      // Ação confirmada
      this.messageService.add({
        severity: 'success',
        summary: 'Sucesso',
        detail: 'Ação realizada'
      });
    }
  });
}
```

### 4. Usar Dialog Simples
```typescript
// Component
dialogVisible = signal(false);

showDialog(): void {
  this.dialogVisible.set(true);
}
```

```html
<!-- Template -->
<p-dialog [(visible)]="dialogVisible" [modal]="true">
  <ng-template #headless>
    <div class="p-8 bg-surface-0 dark:bg-surface-900 rounded-2xl">
      <h3>Título do Dialog</h3>
      <p>Conteúdo</p>
      <p-button label="Fechar" (onClick)="dialogVisible.set(false)" />
    </div>
  </ng-template>
</p-dialog>
```

---

## 🎨 Estilos Headless

### ConfirmDialog com Ícone Circular
```html
<div class="rounded-full bg-red-500 text-white inline-flex justify-center items-center h-20 w-20 -mt-18">
  <i class="pi pi-exclamation-triangle !text-4xl"></i>
</div>
```

### Dialog com Borda e Sombra
```html
<div class="p-8 bg-surface-0 dark:bg-surface-900 rounded-2xl border border-surface-200 dark:border-surface-700 shadow-lg">
  <!-- Conteúdo -->
</div>
```

### Botões Lado a Lado
```html
<div class="flex items-center gap-3 mt-6">
  <p-button label="Cancelar" [outlined]="true" severity="secondary" />
  <p-button label="Confirmar" severity="danger" />
</div>
```

---

## ✅ Severidades Disponíveis

- `success` - Verde (ações positivas)
- `info` - Azul (informações)
- `warn` - Amarelo (avisos)
- `danger` - Vermelho (ações destrutivas)
- `secondary` - Cinza (ações neutras)

---

## 🚀 Build Validado

```bash
npm run build
# ✅ Compilação sem erros
# ✅ ConfirmDialog funcionando
# ✅ Toast funcionando
# ✅ Bundle: 958.65 KB
```

---

## 📝 Próximos Passos (Opcional)

1. **Analisador**: Dialog de preview antes de processar
2. **Painel**: Dialog de detalhes ao clicar em produto
3. **Painel**: ConfirmDialog antes de limpar sessão
4. **i18n**: Traduzir mensagens dos dialogs

---

## 🎯 Exemplo Completo - Analisador Preview

```typescript
// Component
previewVisible = signal(false);
arquivosPreview = signal<PreviewArquivo[]>([]);

mostrarPreview(arquivos: File[]): void {
  // Gerar preview
  this.arquivosPreview.set(/* ... */);
  this.previewVisible.set(true);
}

confirmarProcessamento(): void {
  this.previewVisible.set(false);
  // Processar arquivos
}
```

```html
<!-- Template -->
<p-dialog [(visible)]="previewVisible" [modal]="true">
  <ng-template #headless>
    <div class="p-8 bg-surface-0 dark:bg-surface-900 rounded-2xl w-96">
      <h3 class="text-xl font-bold mb-4">Preview dos Arquivos</h3>
      
      @for (arquivo of arquivosPreview(); track arquivo.nome) {
        <div class="mb-3 p-3 bg-surface-50 dark:bg-surface-800 rounded">
          <p class="font-semibold">{{ arquivo.nome }}</p>
          <p class="text-sm text-muted-color">{{ arquivo.linhas }} linhas</p>
        </div>
      }
      
      <div class="flex gap-3 mt-6">
        <p-button 
          label="Cancelar" 
          [outlined]="true" 
          (onClick)="previewVisible.set(false)" 
          styleClass="w-full"
        />
        <p-button 
          label="Processar" 
          (onClick)="confirmarProcessamento()" 
          styleClass="w-full"
        />
      </div>
    </div>
  </ng-template>
</p-dialog>
```

---

**Documentação completa de Dialogs e Confirms implementada!** 🎉
