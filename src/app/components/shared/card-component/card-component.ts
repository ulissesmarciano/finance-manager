import { Component, Input, signal } from '@angular/core';
import { Metric } from './metric/metric';
import { DateRangePicker } from "../date-range-picker/date-range-picker";
import { Button } from "../button/button";

type CardType = 'summary' | 'period';
type Period = 'this-month' | '7-days' | '30-days' | 'this-year';

@Component({
  imports: [Metric, DateRangePicker, Button],
  selector: 'app-card-component',
  templateUrl: './card-component.html',
})
export class CardComponent {
  @Input() type: CardType = 'summary';

  selectedPeriod = signal<Period>('this-month');

  selectPeriod(period: Period) {
    this.selectedPeriod.set(period);
  }
}
