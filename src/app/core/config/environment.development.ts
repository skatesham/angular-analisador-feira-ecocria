import { Environment } from './environment';

export const environment: Environment = {
  production: false,
  apiBaseUrl: 'http://localhost:3000/api',
  defaultLocale: 'pt-BR',
  supportedLocales: ['pt-BR', 'en-US'],
  storagePrefix: 'app_dev_',
  tokenRefreshInterval: 300000,
  requestTimeout: 30000
};
