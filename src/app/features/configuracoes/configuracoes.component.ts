import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-configuracoes',
  imports: [CommonModule, FormsModule, CardModule, ButtonModule, SelectButtonModule, ToggleSwitchModule],
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
}
