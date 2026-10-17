import { Component } from '@angular/core';
import transactionsData from '../data/recent-transactions.json';
import { TitlesComponent } from '../../../components/shared/titles-component/titles-component';
import { Link } from '../../../components/shared/link/link';
import { MatIcon } from '@angular/material/icon';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  imports: [TitlesComponent, Link, MatIcon, DatePipe, CurrencyPipe],
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.html',
})
export class RecentTransactions {
  readonly transactions = transactionsData;
}
