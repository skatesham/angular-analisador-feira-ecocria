import { DOCUMENT } from '@angular/common';
import { computed, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PrimeNG } from 'primeng/config';
import { $t, updatePreset, updateSurfacePalette } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import Lara from '@primeuix/themes/lara';
import Material from '@primeuix/themes/material';
import Nora from '@primeuix/themes/nora';
import { StorageService } from '../utils/storage.util';

export type ThemeMode = 'light' | 'dark';

export interface ThemeState {
  preset: string;
  primary: string;
  surface: string;
  darkTheme: boolean;
}

const PRESETS: Record<string, unknown> = { Aura, Material, Lara, Nora };
const STORAGE_KEY = 'themeSwitcherState';

const DEFAULT_STATE: ThemeState = {
  preset: 'Aura',
  primary: 'emerald',
  surface: 'zinc',
  darkTheme: true,
};

export const SURFACE_PALETTES: Array<{ name: string; palette: Record<string, string> }> = [
  {
    name: 'ocean',
    palette: {
      0: '#ffffff', 50: '#fbfcfc', 100: '#F7F9F8', 200: '#EFF3F2',
      300: '#DADEDD', 400: '#B1B7B6', 500: '#828787', 600: '#5F7274',
      700: '#415B61', 800: '#29444E', 900: '#183240', 950: '#0c1920',
    },
  },
  {
    name: 'slate',
    palette: {
      0: '#ffffff', 50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0',
      300: '#cbd5e1', 400: '#94a3b8', 500: '#64748b', 600: '#475569',
      700: '#334155', 800: '#1e293b', 900: '#0f172a', 950: '#020617',
    },
  },
  {
    name: 'gray',
    palette: {
      0: '#ffffff', 50: '#f9fafb', 100: '#f3f4f6', 200: '#e5e7eb',
      300: '#d1d5db', 400: '#9ca3af', 500: '#6b7280', 600: '#4b5563',
      700: '#374151', 800: '#1f2937', 900: '#111827', 950: '#030712',
    },
  },
  {
    name: 'zinc',
    palette: {
      0: '#ffffff', 50: '#fafafa', 100: '#f4f4f5', 200: '#e4e4e7',
      300: '#d4d4d8', 400: '#a1a1aa', 500: '#71717a', 600: '#52525b',
      700: '#3f3f46', 800: '#27272a', 900: '#18181b', 950: '#09090b',
    },
  },
  {
    name: 'neutral',
    palette: {
      0: '#ffffff', 50: '#fafafa', 100: '#f5f5f5', 200: '#e5e5e5',
      300: '#d4d4d4', 400: '#a3a3a3', 500: '#737373', 600: '#525252',
      700: '#404040', 800: '#262626', 900: '#171717', 950: '#0a0a0a',
    },
  },
  {
    name: 'stone',
    palette: {
      0: '#ffffff', 50: '#fafaf9', 100: '#f5f5f4', 200: '#e7e5e4',
      300: '#d6d3d1', 400: '#a8a29e', 500: '#78716c', 600: '#57534e',
      700: '#44403c', 800: '#292524', 900: '#1c1917', 950: '#0c0a09',
    },
  },
  {
    name: 'soho',
    palette: {
      0: '#ffffff', 50: '#ececec', 100: '#dedfdf', 200: '#c4c4c6',
      300: '#adaeb0', 400: '#97979b', 500: '#7f8084', 600: '#6a6b70',
      700: '#55565b', 800: '#3f4046', 900: '#2c2c34', 950: '#16161d',
    },
  },
  {
    name: 'viva',
    palette: {
      0: '#ffffff', 50: '#f3f3f3', 100: '#e7e7e8', 200: '#cfd0d0',
      300: '#b7b8b9', 400: '#9fa1a1', 500: '#87898a', 600: '#6e7173',
      700: '#565a5b', 800: '#3e4244', 900: '#262b2c', 950: '#0e1315',
    },
  },
];

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storage = inject(StorageService);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly config = inject(PrimeNG);

  readonly presetNames = Object.keys(PRESETS);
  readonly surfaces = SURFACE_PALETTES;

  readonly state = signal<ThemeState>({ ...DEFAULT_STATE });

  readonly currentTheme = computed<ThemeMode>(() => this.state().darkTheme ? 'dark' : 'light');
  readonly isDark = computed(() => this.state().darkTheme);
  readonly selectedPreset = computed(() => this.state().preset);
  readonly selectedPrimary = computed(() => this.state().primary);
  readonly selectedSurface = computed(() => this.state().surface);

  readonly primaryColors = computed(() => {
    const preset = this.state().preset;
    if (!preset || !PRESETS[preset]) return [];

    const presetObj = PRESETS[preset] as Record<string, Record<string, Record<string, string>>>;
    const presetPrimitive = presetObj?.['primitive'];
    const colorNames = [
      'emerald', 'green', 'lime', 'orange', 'amber', 'yellow',
      'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet',
      'purple', 'fuchsia', 'pink', 'rose',
    ];

    const palettes: Array<{ name: string; palette: Record<string, string> }> = [
      { name: 'noir', palette: {} },
    ];

    colorNames.forEach((color) => {
      if (presetPrimitive?.[color]) {
        palettes.push({ name: color, palette: presetPrimitive[color] });
      }
    });

    return palettes;
  });

  init(): void {
    const saved = this.loadState();
    this.state.set(saved);
    this.config.ripple.set(true);
    this.applyPreset(saved.preset);
    this.toggleDarkMode(saved);
  }

  toggleTheme(): void {
    this.state.update((s) => ({ ...s, darkTheme: !s.darkTheme }));
    this.saveState();
    this.handleDarkModeTransition(this.state());
  }

  setTheme(mode: ThemeMode): void {
    this.state.update((s) => ({ ...s, darkTheme: mode === 'dark' }));
    this.saveState();
    this.handleDarkModeTransition(this.state());
  }

  setPreset(preset: string): void {
    this.state.update((s) => ({ ...s, preset }));
    this.applyPreset(preset);
    this.saveState();
  }

  setPrimaryColor(color: { name: string; palette: Record<string, string> }): void {
    this.state.update((s) => ({ ...s, primary: color.name }));
    updatePreset(this.getPresetExt());
    this.saveState();
  }

  setSurfaceColor(surface: { name: string; palette: Record<string, string> }): void {
    this.state.update((s) => ({ ...s, surface: surface.name }));
    updateSurfacePalette(surface.palette);
    this.saveState();
  }

  private applyPreset(presetName: string): void {
    const preset = PRESETS[presetName];
    if (!preset) return;

    const surfacePalette = this.surfaces.find((s) => s.name === this.state().surface)?.palette;

    if (presetName === 'Material') {
      this.document.body.classList.add('material');
      this.config.ripple.set(true);
    } else {
      this.document.body.classList.remove('material');
    }

    $t()
      .preset(preset)
      .preset(this.getPresetExt())
      .surfacePalette(surfacePalette)
      .use({ useDefaultOptions: true });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private getPresetExt(): any {
    const color = this.primaryColors().find((c) => c.name === this.selectedPrimary());
    if (!color) return {};

    if (color.name === 'noir') {
      return {
        semantic: {
          primary: {
            50: '{surface.50}', 100: '{surface.100}', 200: '{surface.200}',
            300: '{surface.300}', 400: '{surface.400}', 500: '{surface.500}',
            600: '{surface.600}', 700: '{surface.700}', 800: '{surface.800}',
            900: '{surface.900}', 950: '{surface.950}',
          },
          colorScheme: {
            light: {
              primary: { color: '{primary.950}', contrastColor: '#ffffff', hoverColor: '{primary.800}', activeColor: '{primary.700}' },
              highlight: { background: '{primary.950}', focusBackground: '{primary.700}', color: '#ffffff', focusColor: '#ffffff' },
            },
            dark: {
              primary: { color: '{primary.50}', contrastColor: '{primary.950}', hoverColor: '{primary.200}', activeColor: '{primary.300}' },
              highlight: { background: '{primary.50}', focusBackground: '{primary.300}', color: '{primary.950}', focusColor: '{primary.950}' },
            },
          },
        },
      };
    }

    const presetName = this.state().preset;

    if (presetName === 'Nora') {
      return {
        semantic: {
          primary: color.palette,
          colorScheme: {
            light: {
              primary: { color: '{primary.600}', contrastColor: '#ffffff', hoverColor: '{primary.700}', activeColor: '{primary.800}' },
              highlight: { background: '{primary.600}', focusBackground: '{primary.700}', color: '#ffffff', focusColor: '#ffffff' },
            },
            dark: {
              primary: { color: '{primary.500}', contrastColor: '{surface.900}', hoverColor: '{primary.400}', activeColor: '{primary.300}' },
              highlight: { background: '{primary.500}', focusBackground: '{primary.400}', color: '{surface.900}', focusColor: '{surface.900}' },
            },
          },
        },
      };
    }

    if (presetName === 'Material') {
      return {
        semantic: {
          primary: color.palette,
          colorScheme: {
            light: {
              primary: { color: '{primary.500}', contrastColor: '#ffffff', hoverColor: '{primary.400}', activeColor: '{primary.300}' },
              highlight: { background: 'color-mix(in srgb, {primary.color}, transparent 88%)', focusBackground: 'color-mix(in srgb, {primary.color}, transparent 76%)', color: '{primary.700}', focusColor: '{primary.800}' },
            },
            dark: {
              primary: { color: '{primary.400}', contrastColor: '{surface.900}', hoverColor: '{primary.300}', activeColor: '{primary.200}' },
              highlight: { background: 'color-mix(in srgb, {primary.400}, transparent 84%)', focusBackground: 'color-mix(in srgb, {primary.400}, transparent 76%)', color: 'rgba(255,255,255,.87)', focusColor: 'rgba(255,255,255,.87)' },
            },
          },
        },
      };
    }

    return {
      semantic: {
        primary: color.palette,
        colorScheme: {
          light: {
            primary: { color: '{primary.500}', contrastColor: '#ffffff', hoverColor: '{primary.600}', activeColor: '{primary.700}' },
            highlight: { background: '{primary.50}', focusBackground: '{primary.100}', color: '{primary.700}', focusColor: '{primary.800}' },
          },
          dark: {
            primary: { color: '{primary.400}', contrastColor: '{surface.900}', hoverColor: '{primary.300}', activeColor: '{primary.200}' },
            highlight: { background: 'color-mix(in srgb, {primary.400}, transparent 84%)', focusBackground: 'color-mix(in srgb, {primary.400}, transparent 76%)', color: 'rgba(255,255,255,.87)', focusColor: 'rgba(255,255,255,.87)' },
          },
        },
      },
    };
  }

  private handleDarkModeTransition(state: ThemeState): void {
    if (!isPlatformBrowser(this.platformId)) return;

    if ((this.document as Document & { startViewTransition?: (cb: () => void) => { ready: Promise<void> } }).startViewTransition) {
      (this.document as Document & { startViewTransition: (cb: () => void) => { ready: Promise<void> } })
        .startViewTransition(() => this.toggleDarkMode(state));
    } else {
      this.toggleDarkMode(state);
    }
  }

  private toggleDarkMode(state: ThemeState): void {
    if (state.darkTheme) {
      this.document.documentElement.classList.add('dark');
    } else {
      this.document.documentElement.classList.remove('dark');
    }
  }

  private loadState(): ThemeState {
    if (isPlatformBrowser(this.platformId)) {
      const saved = this.storage.get<ThemeState>(STORAGE_KEY);
      if (saved) return saved;
    }
    return { ...DEFAULT_STATE, darkTheme: this.getSystemPreference() === 'dark' };
  }

  private saveState(): void {
    this.storage.set(STORAGE_KEY, this.state());
  }

  private getSystemPreference(): ThemeMode {
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }
}
