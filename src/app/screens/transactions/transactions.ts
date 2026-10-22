import { Component, inject } from '@angular/core';
import {
  TransactionFilters,
  type TransactionFiltersState,
} from './transaction-filters/transaction-filters';
import { TransactionsTable } from './transactions-table/transactions-table';
import { TRANSACTIONS, type Transaction } from './transactions-data';
import { Modal } from '../../components/shared/modal/modal';
import { TransactionModalState } from './transaction-modal-state';

@Component({
  imports: [TransactionFilters, TransactionsTable, Modal],
  selector: 'app-transactions',
  templateUrl: './transactions.html',
})
export class Transactions {
  readonly transactionModalState = inject(TransactionModalState);
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
