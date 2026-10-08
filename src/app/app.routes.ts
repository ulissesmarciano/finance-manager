import { Routes } from '@angular/router';
import { TransactionsHeaderActions } from './screens/transactions/transactions-header-actions';
import { TargetQuotesHeaderActions } from './screens/targets-quotes/targets-quotes-header-actions';
import { Page } from './components/shared/page/page';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./screens/authentication/authentication').then((m) => m.Authentication),
  },
  {
    path: '',
    component: Page,
    children: [
      {
        path: 'dashboard',
        data: {
          header: {
            title: 'Boa noite, Ulisses',
            subtitle: 'Este é o seu panorama financeiro de agosto de 2026',
          },
        },
        loadComponent: () => import('./screens/dashboard/dashboard').then((m) => m.Dashboard),
      },
      {
        path: 'transactions',
        data: {
          header: {
            title: 'Transações',
            subtitle: '12 lançamentos com os filtros aplicados',
            actions: TransactionsHeaderActions,
          },
        },
        loadComponent: () =>
          import('./screens/transactions/transactions').then((m) => m.Transactions),
      },
      {
        path: 'cards-accounts',
        data: {
          header: {
            title: 'Cartões e contas',
            subtitle: 'Acompanhe limites, vencimentos e onde está o seu saldo',
          },
        },
        loadComponent: () =>
          import('./screens/cards-accounts/cards-accounts').then((m) => m.CardsAccounts),
      },
      {
        path: 'targets-quotes',
        data: {
          header: {
            title: 'Orçamentos e Metas',
            subtitle: 'Agosto de 2026 · alertas disparam em 80% de cada limite',
            actions: TargetQuotesHeaderActions,
          },
        },
        loadComponent: () =>
          import('./screens/targets-quotes/targets-quotes').then((m) => m.TargetsQuotes),
      },
      {
        path: 'configuration',
        data: {
          header: {
            title: 'Configurações',
            subtitle: 'Personalize como o FinFlow funciona para você',
          },
        },
        loadComponent: () =>
          import('./screens/configuration/configuration').then((m) => m.Configuration),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () => import('./components/shared/not-found/not-found').then((m) => m.NotFound),
  },
];
