import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from '../utils/storage.util';
import { AppConfigService } from '../config/app-config.service';

export interface LocaleOption {
  code: string;
  label: string;
  flag: string;
  currency: string;
}

export const AVAILABLE_LOCALES: LocaleOption[] = [
  { code: 'pt-BR', label: 'Português (Brasil)', flag: '🇧🇷', currency: 'BRL' },
  { code: 'en-US', label: 'English (US)', flag: '🇺🇸', currency: 'USD' }
];

const STORAGE_KEY = 'locale';

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private readonly translate = inject(TranslateService);
  private readonly storage = inject(StorageService);
  private readonly config = inject(AppConfigService);

  readonly currentLocale = signal<string>(this.config.defaultLocale);
  readonly availableLocales = AVAILABLE_LOCALES;

  init(): void {
    const saved = this.storage.get<string>(STORAGE_KEY);
    const locale = saved && this.config.supportedLocales.includes(saved)
      ? saved
      : this.config.defaultLocale;

    this.translate.addLangs(this.config.supportedLocales);
    this.translate.setDefaultLang(this.config.defaultLocale);
    this.setLocale(locale);
  }

  setLocale(locale: string): void {
    this.translate.use(locale);
    this.currentLocale.set(locale);
    this.storage.set(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }

  getCurrentLocaleOption(): LocaleOption | undefined {
    return AVAILABLE_LOCALES.find((l) => l.code === this.currentLocale());
  }

  getCurrency(): string {
    return this.getCurrentLocaleOption()?.currency ?? 'BRL';
  }
}
