import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { LocaleService, AVAILABLE_LOCALES, LocaleOption } from '../../../core/i18n/locale.service';

@Component({
  selector: 'app-country-selector',
  imports: [SelectModule, FormsModule],
  templateUrl: './country-selector.component.html',
  styleUrl: './country-selector.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountrySelectorComponent {
  private readonly locale = inject(LocaleService);

  readonly locales = AVAILABLE_LOCALES;
  selectedLocale = this.locale.currentLocale();

  onLocaleChange(code: string): void {
    this.locale.setLocale(code);
    this.selectedLocale = code;
  }
}
