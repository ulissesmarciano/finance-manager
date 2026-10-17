import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { CardComponent } from '../../components/shared/card-component/card-component';
import { RecentTransactions } from './recent-transactions/recent-transactions';

@Component({
  imports: [CardComponent, RecentTransactions],
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  isModalOpen = false;

  readonly monthlyLabels = this.getLastSixMonthLabels();
  readonly categoryChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: { display: false },
    },
  };
  readonly monthlyChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: { color: '#526987' },
      },
      y: {
        beginAtZero: true,
        max: 12000,
        ticks: {
          stepSize: 3000,
          color: '#526987',
          callback: (value) => `${Number(value) / 1000}k`,
        },
        grid: {
          color: '#e5edf6',
        },
        border: { display: false },
      },
    },
    datasets: {
      bar: {
        categoryPercentage: 0.68,
        barPercentage: 0.85,
        borderRadius: 6,
        borderSkipped: false,
      },
    },
  };

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  private getLastSixMonthLabels(): string[] {
    const currentDate = new Date();
    const monthFormatter = new Intl.DateTimeFormat('pt-BR', { month: 'short' });

    return Array.from({ length: 6 }, (_, index) =>
      monthFormatter
        .format(new Date(currentDate.getFullYear(), currentDate.getMonth() - 5 + index, 1))
        .replace(/\.$/, '')
        .replace(/^./, (month) => month.toLocaleUpperCase('pt-BR')),
    );
  }
}
