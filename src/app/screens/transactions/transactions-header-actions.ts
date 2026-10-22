import { Component, inject } from '@angular/core';
import { Button } from '../../components/shared/button/button';
import { TransactionModalState } from './transaction-modal-state';

@Component({
  imports: [Button],
  selector: 'app-transactions-header-actions',
  templateUrl: './transactions-header-actions.html',
})
export class TransactionsHeaderActions {
  readonly transactionModalState = inject(TransactionModalState);
}
