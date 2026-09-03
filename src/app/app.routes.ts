import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./screens/home/home').then(m => m.Home),
  },
  {
    path: 'transactions',
    loadComponent: () => import('./screens/transactions/transactions').then(m => m.Transactions),
  },
  {
    path: 'cards-accounts',
    loadComponent: () => import('./screens/cards-accounts/cards-accounts').then(m => m.CardsAccounts),
  },
  {
    path: 'targets-quotes',
    loadComponent: () => import('./screens/targets-quotes/targets-quotes').then(m => m.TargetsQuotes),
  },
  {
    path: 'configuration',
    loadComponent: () => import('./screens/configuration/configuration').then(m => m.Configuration),
  }
];
