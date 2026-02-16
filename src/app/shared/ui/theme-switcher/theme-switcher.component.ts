import { Component, ChangeDetectionStrategy, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { StyleClassModule } from 'primeng/styleclass';
import { SelectModule } from 'primeng/select';
import { ThemeService } from '../../../core/theme/theme.service';
import { LocaleService, AVAILABLE_LOCALES } from '../../../core/i18n/locale.service';
import { environment } from '../../../core/config/environment.development';

@Component({
  selector: 'app-theme-switcher',
  imports: [FormsModule, SelectButtonModule, StyleClassModule, SelectModule],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeSwitcherComponent {
  readonly theme = inject(ThemeService);
  private readonly locale = inject(LocaleService);

  readonly isProduction = environment.production;
  readonly locales = AVAILABLE_LOCALES;
  readonly presets = this.theme.presetNames;
  readonly surfaces = this.theme.surfaces;

  readonly iconClass = computed(() => this.theme.isDark() ? 'pi-sun' : 'pi-moon');
  readonly primaryColors = this.theme.primaryColors;
  readonly selectedPrimary = this.theme.selectedPrimary;
  readonly selectedSurface = this.theme.selectedSurface;
  readonly selectedPreset = this.theme.selectedPreset;
  readonly currentLocale = this.locale.currentLocale;

  readonly paletteOpen = signal(false);

  onThemeToggle(): void {
    this.theme.toggleTheme();
  }

  onPrimaryChange(event: Event, color: { name: string; palette: Record<string, string> }): void {
    this.theme.setPrimaryColor(color);
    event.stopPropagation();
  }

  onSurfaceChange(event: Event, surface: { name: string; palette: Record<string, string> }): void {
    this.theme.setSurfaceColor(surface);
    event.stopPropagation();
  }

  onPresetChange(preset: string): void {
    this.theme.setPreset(preset);
  }

  onLocaleChange(code: string): void {
    this.locale.setLocale(code);
  }

  togglePalette(): void {
    this.paletteOpen.update((v) => !v);
  }

  closePalette(): void {
    this.paletteOpen.set(false);
  }
}
