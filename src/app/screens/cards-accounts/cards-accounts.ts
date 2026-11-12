import { Component } from '@angular/core';
import { Button } from '../../components/shared/button/button';
import { Card, CreditCardComponent } from './credit-card-component/credit-card-component';

export interface CardAccountsState {
  type: 'credit-card' | 'account-balance';
  icon?: 'credit_card' | 'account_balance';
}

@Component({
  imports: [Button, CreditCardComponent],
  selector: 'app-cards-accounts',
  templateUrl: './cards-accounts.html',
})
export class CardsAccounts {
  readonly typeOptions: { value: CardAccountsState['type']; label: string; icon: string }[] = [
    { value: 'credit-card', label: 'Cartão de Crédito', icon: 'credit_card' },
    { value: 'account-balance', label: 'Contas e Poupança', icon: 'account_balance' },
  ];

  readonly creditCard1: Card = {
    name: 'Bradesco',
    flag: 'Visa',
    number: '•••• 4821',
    expirationDate: '12 set',
    cardLimit: 6000,
    cardBalance: 1840.5,
  };

  readonly creditCard2: Card = {
    name: 'PicPay',
    flag: 'Mastercard',
    number: '•••• 5678',
    expirationDate: '25 out',
    cardLimit: 5000,
    cardBalance: 2500,
  };

  readonly creditCard3: Card = {
    name: 'Inter',
    flag: 'American Express',
    number: '•••• 9012',
    expirationDate: '15 nov',
    cardLimit: 7000,
    cardBalance: 6500,
  };

  selectedType: CardAccountsState['type'] = 'credit-card';

  selectType(value: CardAccountsState['type']): void {
    this.selectedType = value;
  }
}
