import { Component, Input } from '@angular/core';
import { TitlesComponent } from '../titles-component/titles-component';
import { MatIcon } from '@angular/material/icon';
import { Button } from '../button/button';

type EmptyStateType = 'transaction' | 'transaction-filter' | 'goals';

@Component({
  imports: [TitlesComponent, MatIcon, Button],
  selector: 'app-empty-state',
  templateUrl: './empty-state.html',
})
export class EmptyState {
  @Input() emptyStateType: EmptyStateType = 'transaction';
  @Input() emptyStateTitle = '';
  @Input() emptyStateSubtitle = '';
  @Input() emptSytateContentTitle = '';
  @Input() emptyStateContentText = '';
}
