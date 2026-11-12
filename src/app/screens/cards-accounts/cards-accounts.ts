import { Component } from '@angular/core';
import { Button } from '../../components/shared/button/button';

export interface CardAccountsState {
  type: 'credit-card' | 'account-balance';
  icon?: 'credit_card' | 'account_balance';
}

@Component({
  imports: [Button],
  selector: 'app-cards-accounts',
  templateUrl: './cards-accounts.html',
})
export class CardsAccounts {
  readonly typeOptions: { value: CardAccountsState['type']; label: string; icon: string }[] = [
    { value: 'credit-card', label: 'Cartão de Crédito', icon: 'credit_card' },
    { value: 'account-balance', label: 'Contas e Poupança', icon: 'account_balance' },
  ];
  selectedType: CardAccountsState['type'] = 'credit-card';

  selectType(value: CardAccountsState['type']): void {
    this.selectedType = value;
  }
}
