import { Component, input, Input } from '@angular/core';

type BarType = 'single-bar' | 'versus-bar';

export interface ValueRange {
  current: number;
  total: number;
}

export function getValueRangePercentage(range: ValueRange): number {
  if (range.total <= 0) {
    return 0;
  }

  return Math.min(Math.max((range.current / range.total) * 100, 0), 100);
}

@Component({
  imports: [],
  selector: 'app-progress-bar-component',
  templateUrl: './progress-bar-component.html',
})
export class ProgressBarComponent {
  @Input() barType: BarType | null = null;
  @Input() percentage = 0;
  valueRange = input<ValueRange | null>(null);

  variantSingleBarClasses(): string {
    if (this.progressPercentage() < 80) {
      return 'bg-primary rounded-sm';
    }
    return 'bg-accent rounded-sm';
  }

  progressPercentage(): number {
    const range = this.valueRange();

    return range === null ? this.percentage : getValueRangePercentage(range);
  }

  remainingAmount(range: ValueRange): number {
    return Math.max(range.total - range.current, 0);
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }
}
