import { Component, Input } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './bar-chart.html',
})
export class BarChart {
  @Input({ required: true }) data!: ChartData<'bar'>;
  @Input() options: ChartConfiguration<'bar'>['options'] = {};
}