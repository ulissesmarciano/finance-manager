import { Component } from '@angular/core';
import transactionsData from '../data/recent-transactions.json';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { getPaymentMethodLabel } from '../payment-methods';
import { Button } from '../../../components/shared/button/button';

@Component({
  imports: [DatePipe, CurrencyPipe, Button],
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.html',
})
export class TransactionsTable {
  readonly transactions = transactionsData;
  readonly getPaymentMethodLabel = getPaymentMethodLabel;
}
