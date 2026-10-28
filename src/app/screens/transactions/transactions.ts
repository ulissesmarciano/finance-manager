import { Component, inject } from '@angular/core';
import {
  TransactionFilters,
  type TransactionFiltersState,
} from './transaction-filters/transaction-filters';
import { TransactionsTable } from './transactions-table/transactions-table';
import { TRANSACTIONS, type Transaction } from './transactions-data';
import { Modal } from '../../components/shared/modal/modal';
import { TransactionModalState } from './transaction-modal-state';
import { MatIcon } from '@angular/material/icon';

@Component({
  imports: [TransactionFilters, TransactionsTable, Modal, MatIcon],
  selector: 'app-transactions',
  templateUrl: './transactions.html',
})
export class Transactions {
  readonly transactionModalState = inject(TransactionModalState);
  private transactions: Transaction[] = [...TRANSACTIONS];
  private activeFilters: TransactionFiltersState = {
    type: 'all',
    nature: 'all',
    paymentMethod: 'all',
  };
  filteredTransactions: Transaction[] = [...TRANSACTIONS];
  editingTransaction: Transaction | null = null;

  onFiltersChange(filters: TransactionFiltersState): void {
    this.activeFilters = filters;
    this.applyFilters();
  }

  onAddRequested(): void {
    this.editingTransaction = null;
    this.transactionModalState.open();
  }

  onEditRequested(transaction: Transaction): void {
    this.editingTransaction = transaction;
    this.transactionModalState.open();
  }

  onModalClosed(): void {
    this.transactionModalState.close();
    this.editingTransaction = null;
  }

  onTransactionCreated(transaction: Transaction): void {
    this.transactions = [transaction, ...this.transactions];
    this.applyFilters();
  }

  onTransactionUpdated(updated: Transaction): void {
    this.transactions = this.transactions.map((transaction) =>
      transaction.id === updated.id ? updated : transaction,
    );

    this.applyFilters();
  }

  onDeleteRequested(transaction: Transaction): void {
    this.transactions = this.transactions.filter((item) => item.id !== transaction.id);

    this.applyFilters();
  }

  private applyFilters(): void {
    this.filteredTransactions = this.transactions.filter((transaction) => {
      const matchesType =
        this.activeFilters.type === 'all' || transaction.type === this.activeFilters.type;
      const matchesNature =
        this.activeFilters.nature === 'all' || transaction.nature === this.activeFilters.nature;
      const matchesPaymentMethod =
        this.activeFilters.paymentMethod === 'all' ||
        transaction.paymentMethod === this.activeFilters.paymentMethod;

      return matchesType && matchesNature && matchesPaymentMethod;
    });
  }
}
