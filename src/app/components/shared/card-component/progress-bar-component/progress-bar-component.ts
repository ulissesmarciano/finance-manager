import { Component, input, Input } from '@angular/core';

type BarType = 'single-bar' | 'versus-bar';

export interface ValueRange {
  current: number;
  total: number;
}

export type ValueRangeDisplay = 'amounts' | 'completion';

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
  valueRangeDisplay = input<ValueRangeDisplay>('amounts');
  singleBarType = input<'growing' | 'descending'>('growing');

  variantSingleBarClasses(): string {
    const isBelowThreshold = this.progressPercentage() < 80;

    if (this.singleBarType() === 'descending') {
      return isBelowThreshold ? 'bg-primary rounded-sm' : 'bg-accent rounded-sm';
    }

    return isBelowThreshold ? 'bg-accent rounded-sm' : 'bg-primary rounded-sm';
  }

  progressPercentage(): number {
    const range = this.valueRange();

    return range === null ? this.percentage : getValueRangePercentage(range);
  }

  completionPercentage(): number {
    return Math.round(this.progressPercentage());
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
