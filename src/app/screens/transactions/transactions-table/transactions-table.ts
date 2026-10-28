import { Component, input, output } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { getPaymentMethodLabel } from '../payment-methods';
import { Button } from '../../../components/shared/button/button';
import { Transaction } from '../transactions-data';

@Component({
  imports: [DatePipe, CurrencyPipe, Button],
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.html',
})
export class TransactionsTable {
  transactions = input<Transaction[]>([]);
  editedRequest = output<Transaction>();

  readonly getPaymentMethodLabel = getPaymentMethodLabel;
}
