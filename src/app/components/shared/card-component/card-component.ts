import { Component, Input, signal } from '@angular/core';
import { Metric } from './metric/metric';
import { DateRangePicker } from '../date-range-picker/date-range-picker';
import { Button } from '../button/button';
import { CustomIcon, type IconName } from '../custom-icon/custom-icon';
import { MedalComponent } from '../medal-component/medal-component';
import { BarChart } from './bar-chart/bar-chart';
import { ChartConfiguration, ChartData } from 'chart.js';
import { DoughnutChart } from './doughnut-chart/doughnut-chart';
import { MatIcon } from '@angular/material/icon';

type CardType = 'summary' | 'period' | 'metrics' | 'chart' | 'donut-chart';
type Period = 'this-month' | '7-days' | '30-days' | 'this-year';
type BarType = 'single-bar' | 'versus-bar';

@Component({
  imports: [Metric, DateRangePicker, Button, CustomIcon, BarChart, DoughnutChart, MedalComponent, MatIcon],
  selector: 'app-card-component',
  templateUrl: './card-component.html',
})
export class CardComponent {
  @Input() type: CardType = 'metrics';
  @Input() topIcon: IconName | null = null;
  @Input() barType: BarType | null = null;
  @Input() leftIcon: IconName | null = null;

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
  @Input() donutChartData: ChartData<'doughnut'> = { labels: [], datasets: [] };
  @Input() donutChartOptions: ChartConfiguration<'doughnut'>['options'] = {};

  dataSetLabelIndicator(indicator: string | undefined): string | undefined {
    if (indicator === 'Receitas') {
      return 'bg-primary rounded-full w-3-sm h-3-sm';
    }
    if (indicator === 'Despesas') {
      return 'bg-accent rounded-full w-3-sm h-3-sm';
    }

    return undefined;
  }

  getDonutColor(index: number): string | undefined {
    const colors = this.donutChartData.datasets[0]?.backgroundColor;

    if (Array.isArray(colors)) {
      const color = colors[index];
      return typeof color === 'string' ? color : undefined;
    }

    return typeof colors === 'string' ? colors : undefined;
  }
}
