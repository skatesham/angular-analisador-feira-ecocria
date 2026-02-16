import { inject, Injectable, signal } from '@angular/core';
import { StorageService } from '../utils/storage.util';

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  roles: string[];
}

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth_user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly storage = inject(StorageService);

  readonly isAuthenticated = signal<boolean>(false);
  readonly currentUser = signal<AuthUser | null>(null);

  init(): void {
    const token = this.storage.get<string>(TOKEN_KEY);
    const user = this.storage.get<AuthUser>(USER_KEY);
    if (token && user) {
      this.isAuthenticated.set(true);
      this.currentUser.set(user);
    }
  }

  login(token: string, user: AuthUser): void {
    this.storage.set(TOKEN_KEY, token);
    this.storage.set(USER_KEY, user);
    this.isAuthenticated.set(true);
    this.currentUser.set(user);
  }

  logout(): void {
    this.storage.remove(TOKEN_KEY);
    this.storage.remove(USER_KEY);
    this.isAuthenticated.set(false);
    this.currentUser.set(null);
  }

  getToken(): string | null {
    return this.storage.get<string>(TOKEN_KEY);
  }

  hasRole(role: string): boolean {
    return this.currentUser()?.roles.includes(role) ?? false;
  }

  hasAnyRole(roles: string[]): boolean {
    const userRoles = this.currentUser()?.roles ?? [];
    return roles.some((r) => userRoles.includes(r));
  }
}
