import { Component } from '@angular/core';
import { TransactionFilters } from './transaction-filters/transaction-filters';

@Component({
  imports: [TransactionFilters],
  selector: 'app-transactions',
  templateUrl: './transactions.html',
})
export class Transactions {}
