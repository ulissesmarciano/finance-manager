import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

type IconName = 'north_east' | 'south_east';
type ChipType = 'metricChipComponent' | 'infoChipComponent' | 'percentageChipComponent';

@Component({
  imports: [MatIcon],
  selector: 'app-chip-component',
  templateUrl: './chip-component.html',
})
export class ChipComponent {
  @Input() name = '';
  @Input() icon: IconName | null = null;
  @Input() chipType: ChipType = 'metricChipComponent';
  @Input() indicator: number | null = null;

  variantMetricClasses(): string {
    const variants: Record<IconName, string> = {
      north_east:
        'flex items-center gap-1 py-1 px-2 rounded-lg bg-success-soft text-success text-12',
      south_east:
        'flex items-center gap-1 py-1 px-2 rounded-lg bg-destructive-soft text-destructive text-12',
    };

    return this.icon ? variants[this.icon] : '';
  }

  variantPercentageClasses(indicator: number | null): string {
    if (indicator !== null && indicator >= 90) {
      return 'inline-flex self-end gap-1 py-1 px-2 rounded-lg bg-accent-soft text-accent font-semibold text-12';
    }
    if (indicator !== null && indicator < 90) {
      return 'inline-flex self-end gap-1 py-1 px-2 rounded-lg bg-success-soft text-success font-semibold text-12';
    }

    return 'inline-flex self-end gap-1 py-1 px-2 rounded-lg bg-background text-muted-foreground font-semibold text-12';
  }
}
