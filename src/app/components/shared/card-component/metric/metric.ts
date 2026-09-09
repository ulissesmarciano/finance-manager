import { Component, Input } from '@angular/core';

type CardType = 'summary' | 'metrics';
interface MetricClasses {
  container: string;
  label: string;
  value: string;
  foot?: string;
}

@Component({
  imports: [],
  selector: 'app-metric',
  templateUrl: './metric.html',
})
export class Metric {
  @Input() label = '';
  @Input() value = '';
  @Input() foot = '';
  @Input() variant: CardType = 'summary';

  variantClasses(): MetricClasses {
    const variants: Record<CardType, MetricClasses> = {
      summary: {
        container: 'flex flex-col',
        label: 'text-primary-foreground opacity-80 text-14',
        value: 'text-primary-foreground text-18 font-bold',
      },
      metrics: {
        container: 'flex flex-col',
        label: 'text-muted-foreground text-14',
        value: 'text-foreground text-24 font-bold',
        foot: 'text-muted-foreground text-12',
      },
    };

    return variants[this.variant];
  }
}
