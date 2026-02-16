import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/landing-layout/landing-layout.component').then(m => m.LandingLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./features/landing-feira/landing-feira.component').then(m => m.LandingFeiraComponent)
      },
      {
        path: 'analisar',
        loadComponent: () => import('./features/analisador/analisador.component').then(m => m.AnalisadorComponent)
      },
      {
        path: 'painel',
        loadComponent: () => import('./features/painel/painel.component').then(m => m.PainelComponent)
      },
      {
        path: 'como-funciona',
        loadComponent: () => import('./features/como-funciona/como-funciona.component').then(m => m.ComoFuncionaComponent)
      },
      {
        path: 'configuracoes',
        loadComponent: () => import('./features/configuracoes/configuracoes.component').then(m => m.ConfiguracoesComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
