import { inject, Injectable } from '@angular/core';
import { AppConfigService } from '../config/app-config.service';

@Injectable({ providedIn: 'root' })
export class StorageService {
  private readonly config = inject(AppConfigService);

  private prefixKey(key: string): string {
    return `${this.config.storagePrefix}${key}`;
  }

  get<T>(key: string): T | null {
    try {
      const raw = localStorage.getItem(this.prefixKey(key));
      return raw ? JSON.parse(raw) as T : null;
    } catch {
      return null;
    }
  }

  set<T>(key: string, value: T): void {
    try {
      localStorage.setItem(this.prefixKey(key), JSON.stringify(value));
    } catch {
      console.error(`Failed to save key "${key}" to localStorage`);
    }
  }

  remove(key: string): void {
    localStorage.removeItem(this.prefixKey(key));
  }

  clear(): void {
    const prefix = this.config.storagePrefix;
    const keysToRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k?.startsWith(prefix)) {
        keysToRemove.push(k);
      }
    }
    keysToRemove.forEach((k) => localStorage.removeItem(k));
  }
}
