import { Component, Input } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './doughnut-chart.html',
})
export class DoughnutChart {
  @Input({ required: true }) data!: ChartData<'doughnut'>;
  @Input() options: ChartConfiguration<'doughnut'>['options'] = {};
}
