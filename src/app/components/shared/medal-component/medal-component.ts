import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

type IconName = 'north_east' | 'south_east';

@Component({
  imports: [MatIcon],
  selector: 'app-chip-component',
  templateUrl: './medal-component.html',
})
export class MedalComponent {
  @Input() name = '';
  @Input() icon: IconName = 'north_east';

  variantClasses(): string {
    const variants: Record<IconName, string> = {
      north_east:
        'flex items-center gap-1 py-1 px-2 rounded-lg bg-success-soft text-success text-12',
      south_east:
        'flex items-center gap-1 py-1 px-2 rounded-lg bg-destructive-soft text-destructive text-12',
    };

    return variants[this.icon];
  }
}