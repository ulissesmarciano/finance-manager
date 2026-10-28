import { Component, inject, signal } from '@angular/core';
import {
  TransactionFilters,
  type TransactionFiltersState,
} from './transaction-filters/transaction-filters';
import { TransactionsTable } from './transactions-table/transactions-table';
import { TRANSACTIONS, type Transaction } from './transactions-data';
import { Modal } from '../../components/shared/modal/modal';
import { TransactionModalState } from './transaction-modal-state';
import { MatIcon } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  imports: [TransactionFilters, TransactionsTable, Modal, MatIcon, MatSnackBarModule],
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
  filteredTransactions = signal<Transaction[]>([...TRANSACTIONS]);
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
    const deletedIndex = this.transactions.findIndex((item) => item.id === transaction.id);

    if (deletedIndex === -1) {
      return;
    }

    this.transactions = this.transactions.filter((item) => item.id !== transaction.id);
    const snackBarRef = this.snackBar.open('Transação excluída', 'Desfazer', {
      duration: 5000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['success-snackbar'],
    });
    snackBarRef.onAction().subscribe(() => {
      if (this.transactions.some((item) => item.id === transaction.id)) {
        return;
      }

      this.transactions = [
        ...this.transactions.slice(0, deletedIndex),
        transaction,
        ...this.transactions.slice(deletedIndex),
      ];
      this.applyFilters();
    });
    this.applyFilters();
  }

  private readonly snackBar = inject(MatSnackBar);

  private applyFilters(): void {
    this.filteredTransactions.set(
      this.transactions.filter((transaction) => {
        const matchesType =
          this.activeFilters.type === 'all' || transaction.type === this.activeFilters.type;
        const matchesNature =
          this.activeFilters.nature === 'all' || transaction.nature === this.activeFilters.nature;
        const matchesPaymentMethod =
          this.activeFilters.paymentMethod === 'all' ||
          transaction.paymentMethod === this.activeFilters.paymentMethod;

        return matchesType && matchesNature && matchesPaymentMethod;
      }),
    );
  }
}
