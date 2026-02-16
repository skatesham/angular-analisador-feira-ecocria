import { Environment } from './environment';

export const environment: Environment = {
  production: true,
  apiBaseUrl: 'https://api.example.com/api',
  defaultLocale: 'pt-BR',
  supportedLocales: ['pt-BR', 'en-US'],
  storagePrefix: 'app_',
  tokenRefreshInterval: 300000,
  requestTimeout: 30000
};
