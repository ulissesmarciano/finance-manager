import { Component } from '@angular/core';
import {
  TransactionFilters,
  type TransactionFiltersState,
} from './transaction-filters/transaction-filters';
import { TransactionsTable } from './transactions-table/transactions-table';
import { TRANSACTIONS, type Transaction } from './transactions-data';

@Component({
  imports: [TransactionFilters, TransactionsTable],
  selector: 'app-transactions',
  templateUrl: './transactions.html',
})
export class Transactions {
  filteredTransactions: Transaction[] = [...TRANSACTIONS];

  onFiltersChange(filters: TransactionFiltersState): void {
    this.filteredTransactions = TRANSACTIONS.filter((transaction) => {
      const matchesType = filters.type === 'all' || transaction.type === filters.type;
      const matchesNature = filters.nature === 'all' || transaction.nature === filters.nature;
      const matchesPaymentMethod =
        filters.paymentMethod === 'all' || transaction.paymentMethod === filters.paymentMethod;

      return matchesType && matchesNature && matchesPaymentMethod;
    });
  }
}
