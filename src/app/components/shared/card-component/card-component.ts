import { Component, input, signal } from '@angular/core';
import { Metric } from './metric/metric';
import { DateRangePicker } from '../date-range-picker/date-range-picker';
import { Button } from '../button/button';
import { CustomIcon, type IconName } from '../custom-icon/custom-icon';
import { BarChart } from './bar-chart/bar-chart';
import { ChartConfiguration, ChartData } from 'chart.js';
import { DoughnutChart } from './doughnut-chart/doughnut-chart';
import { MatIcon } from '@angular/material/icon';
import { ChipComponent } from './chip-component/chip-component';
import { ProgressBarComponent } from './progress-bar-component/progress-bar-component';

type CardType = 'summary' | 'period' | 'metrics' | 'budget' | 'chart' | 'donut-chart';
type Period = 'this-month' | '7-days' | '30-days' | 'this-year';
type BarType = 'single-bar' | 'versus-bar';
type MetricChipType = 'metricChipComponent' | 'infoChipComponent' | 'percentageChipComponent';

interface DonutChartItem {
  name: string;
  value: string;
}

@Component({
  imports: [
    Metric,
    DateRangePicker,
    Button,
    CustomIcon,
    BarChart,
    DoughnutChart,
    ChipComponent,
    MatIcon,
    ProgressBarComponent,
  ],
  selector: 'app-card-component',
  templateUrl: './card-component.html',
})
export class CardComponent {
  type = input<CardType>('metrics');
  topIcon = input<IconName | null>(null);
  barType = input<BarType | null>(null);
  leftIcon = input<IconName | null>(null);
  metricChipType = input<MetricChipType>('metricChipComponent');
  metricChipIcon = input<'north_east' | 'south_east' | null>(null);
  versusPercentage = input<number>(0);
  metricChipValue = input<string>('');
  metricLabel = input<string>('');
  value = input<string>('');
  foot = input<string>('');
  chartTitle = input<string>('');
  chartSubtitle = input<string>('');
  chartData = input<ChartData<'bar'>>({ labels: [], datasets: [] });
  chartOptions = input<ChartConfiguration<'bar'>['options']>({});
  donutChartData = input<ChartData<'doughnut'>>({ labels: [], datasets: [] });
  donutChartOptions = input<ChartConfiguration<'doughnut'>['options']>({});
  donutChartItems = input<DonutChartItem[]>([]);
  budgetChipName = input<string>('');
  chipPercentage = input<number | null>(null);
  donutChartType = input<'default' | 'custom'>('default');
  progressBarPercentage = input<number>(0);

  selectedPeriod = signal<Period>('this-month');

  selectPeriod(period: Period) {
    this.selectedPeriod.set(period);
  }

  getDonutColor(index: number): string | undefined {
    const colors = this.donutChartData().datasets[0]?.backgroundColor;

    if (Array.isArray(colors)) {
      const color = colors[index];
      return typeof color === 'string' ? color : undefined;
    }

    return typeof colors === 'string' ? colors : undefined;
  }
}
