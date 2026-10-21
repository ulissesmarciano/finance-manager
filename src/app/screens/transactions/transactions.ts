import { Component } from '@angular/core';
import { TransactionFilters } from './transaction-filters/transaction-filters';
import { TransactionsTable } from './transactions-table/transactions-table';

@Component({
  imports: [TransactionFilters, TransactionsTable],
  selector: 'app-transactions',
  templateUrl: './transactions.html',
})
export class Transactions {}
