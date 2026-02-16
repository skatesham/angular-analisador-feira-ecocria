export interface Environment {
  production: boolean;
  apiBaseUrl: string;
  defaultLocale: string;
  supportedLocales: string[];
  storagePrefix: string;
  tokenRefreshInterval: number;
  requestTimeout: number;
}
