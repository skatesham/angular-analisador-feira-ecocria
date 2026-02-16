import { Injectable } from '@angular/core';
import { environment } from './environment.development';

@Injectable({ providedIn: 'root' })
export class AppConfigService {
  private readonly env = environment;

  get production(): boolean {
    return this.env.production;
  }

  get apiBaseUrl(): string {
    return this.env.apiBaseUrl;
  }

  get defaultLocale(): string {
    return this.env.defaultLocale;
  }

  get supportedLocales(): string[] {
    return this.env.supportedLocales;
  }

  get storagePrefix(): string {
    return this.env.storagePrefix;
  }

  get tokenRefreshInterval(): number {
    return this.env.tokenRefreshInterval;
  }

  get requestTimeout(): number {
    return this.env.requestTimeout;
  }

  getEndpoint(path: string): string {
    return `${this.env.apiBaseUrl}/${path}`;
  }
}
