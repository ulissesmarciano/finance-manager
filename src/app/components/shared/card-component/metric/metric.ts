import { Component, input, Input } from '@angular/core';

type CardType = 'summary' | 'metrics';
interface MetricClasses {
  container: string;
  label: string;
  value: string;
  title: string;
  foot?: string;
}

@Component({
  imports: [],
  selector: 'app-metric',
  templateUrl: './metric.html',
})
export class Metric {
  title = input<string | null>(null);
  @Input() label = '';
  @Input() value = '';
  @Input() foot = '';
  @Input() variant: CardType = 'summary';

  variantClasses(): MetricClasses {
    const variants: Record<CardType, MetricClasses> = {
      summary: {
        container: 'flex flex-col',
        title: '',
        label: 'text-primary-foreground opacity-80 text-12',
        value: 'text-primary-foreground text-18 font-bold',
      },
      metrics: {
        container: 'flex flex-col',
        title: this.title() ? 'text-foreground text-14 font-semibold' : '',
        label: 'text-muted-foreground text-14',
        value: 'text-foreground text-24 font-bold',
        foot: 'text-muted-foreground text-12',
      },
    };

    return variants[this.variant];
  }
}
