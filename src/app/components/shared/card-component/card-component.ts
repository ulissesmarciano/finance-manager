import { Component, Input, signal } from '@angular/core';
import { Metric } from './metric/metric';
import { DateRangePicker } from '../date-range-picker/date-range-picker';
import { Button } from '../button/button';
import { CustomIcon } from '../custom-icon/custom-icon';
import { MedalComponent } from '../medal-component/medal-component';
import { BarChart } from './bar-chart/bar-chart';
import { ChartConfiguration, ChartData } from 'chart.js';

type CardType = 'summary' | 'period' | 'metrics' | 'chart';
type Period = 'this-month' | '7-days' | '30-days' | 'this-year';
type IconName = 'north_east' | 'south_east' | 'compare_arrows' | 'savings' | 'warning';

@Component({
  imports: [Metric, DateRangePicker, Button, CustomIcon, MedalComponent, BarChart],
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
  @Input() chartTitle = '';
  @Input() chartSubtitle = '';
  @Input() chartData: ChartData<'bar'> = { labels: [], datasets: [] };
  @Input() chartOptions: ChartConfiguration<'bar'>['options'] = {};

  dataSetLabelIndicator(indicator: string | undefined): string | undefined {
    if (indicator === 'Receitas') {
      return 'bg-primary rounded-full w-3-sm h-3-sm';
    }
    if (indicator === 'Despesas') {
      return 'bg-accent rounded-full w-3-sm h-3-sm';
    }

    return undefined;
  }
}
