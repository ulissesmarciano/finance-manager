import { Component, Input, signal } from '@angular/core';
import { Metric } from './metric/metric';
import { DateRangePicker } from '../date-range-picker/date-range-picker';
import { Button } from '../button/button';
import { CustomIcon } from '../custom-icon/custom-icon';
import { MedalComponent } from '../medal-component/medal-component';

type CardType = 'summary' | 'period' | 'metrics';
type Period = 'this-month' | '7-days' | '30-days' | 'this-year';
type IconName = 'north_east' | 'south_east' | 'compare_arrows' | 'savings' | 'warning';

@Component({
  imports: [Metric, DateRangePicker, Button, CustomIcon, MedalComponent],
  selector: 'app-card-component',
  templateUrl: './card-component.html',
})
export class CardComponent {
  @Input() type: CardType = 'metrics';
  @Input() iconName: IconName = 'north_east';

  selectedPeriod = signal<Period>('this-month');

  selectPeriod(period: Period) {
    this.selectedPeriod.set(period);
  }

  @Input() metricLabel = '';
  @Input() value = '';
  @Input() foot = '';
}
