import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-configuracoes',
  imports: [CommonModule, FormsModule, CardModule, ButtonModule, SelectButtonModule, ToggleSwitchModule, ConfirmDialogModule, ToastModule, TranslateModule],
  providers: [ConfirmationService, MessageService],
  templateUrl: './configuracoes.component.html',
  styles: [`
    :host {
      --dark: #333;
      --light: #fff;
    }
    :host(.dark) {
      background-color: var(--dark);
      color: var(--light);
    }
    :host(.light) {
      background-color: var(--light);
      color: var(--dark);
    }
  `]
})
export class ConfiguracoesComponent {
  private translate = inject(TranslateService);
  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);

  idiomas = [
    { label: 'Português (BR)', value: 'pt-BR' },
    { label: 'English', value: 'en' }
  ];

  idiomaAtual = signal<string>(this.translate.currentLang || 'pt-BR');
  darkMode = signal<boolean>(document.documentElement.classList.contains('dark'));

  alterarIdioma(idioma: string): void {
    this.idiomaAtual.set(idioma);
    this.translate.use(idioma);
    localStorage.setItem('locale', idioma);
  }

  toggleDarkMode(): void {
    const isDark = !this.darkMode();
    this.darkMode.set(isDark);
    
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

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

  private limparTodosDados(): void {
    // Limpar localStorage
    const locale = localStorage.getItem('locale');
    const theme = localStorage.getItem('theme');
    localStorage.clear();
    if (locale) localStorage.setItem('locale', locale);
    if (theme) localStorage.setItem('theme', theme);

    // Limpar IndexedDB (se existir)
    if (window.indexedDB) {
      indexedDB.databases().then(databases => {
        databases.forEach(db => {
          if (db.name) {
            indexedDB.deleteDatabase(db.name);
          }
        });
      });
    }

    this.messageService.add({
      severity: 'success',
      summary: 'Dados Apagados',
      detail: 'Todos os dados foram removidos com sucesso.',
      life: 3000
    });
  }
}
