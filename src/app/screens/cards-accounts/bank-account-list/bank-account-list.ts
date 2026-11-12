import { Component } from '@angular/core';
import { CustomIcon } from '../../../components/shared/custom-icon/custom-icon';
import type { IconName } from '../../../components/shared/custom-icon/custom-icon';
import { TitlesComponent } from '../../../components/shared/titles-component/titles-component';

type BankAccountType = 'Corrente' | 'Poupança' | 'Caixinha' | 'Investimentos';

interface BankAccount {
  id: string;
  name: string;
  institution: string;
  accountType: BankAccountType;
  balance: number;
}

@Component({
  imports: [CustomIcon, TitlesComponent],
  selector: 'app-bank-account-list',
  templateUrl: './bank-account-list.html',
})
export class BankAccountList {
  readonly accounts: BankAccount[] = [
    {
      id: 'checking-main',
      name: 'Conta Corrente Principal',
      institution: 'Nova Bank',
      accountType: 'Corrente',
      balance: 12480.32,
    },
    {
      id: 'emergency-reserve',
      name: 'Reserva de Emergência',
      institution: 'Inter',
      accountType: 'Poupança',
      balance: 15520,
    },
    {
      id: 'travel-savings',
      name: 'Caixinha de Viagem',
      institution: 'PicPay',
      accountType: 'Caixinha',
      balance: 5200,
    },
    {
      id: 'investments',
      name: 'Caixa de Investimentos',
      institution: 'Rico',
      accountType: 'Investimentos',
      balance: 13891.15,
    },
  ];

  readonly totalBalance = this.accounts.reduce((total, account) => total + account.balance, 0);

  private readonly currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  formatCurrency(value: number): string {
    return this.currencyFormatter.format(value);
  }

  getShare(balance: number): string {
    return `${Math.round((balance / this.totalBalance) * 100)}%`;
  }

  getAccountIcon(accountType: BankAccountType): IconName {
    if (accountType === 'Poupança') {
      return 'savings';
    }

    if (accountType === 'Investimentos') {
      return 'account_balance';
    }

    return 'account_balance_wallet';
  }
}
