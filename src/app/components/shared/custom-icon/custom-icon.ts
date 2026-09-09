import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

type IconName = 'north_east' | 'south_east' | 'compare_arrows' | 'savings' | 'warning';

@Component({
  imports: [MatIconModule],
  selector: 'app-custom-icon',
  templateUrl: './custom-icon.html',
})
export class CustomIcon {
  @Input() name: IconName = 'north_east';

  variantClasses(): string {
    const variants: Record<IconName, string> = {
      north_east:
        'flex size-10 items-center justify-center rounded-lg bg-success-soft text-success',
      south_east:
        'flex size-10 items-center justify-center rounded-lg bg-destructive-soft text-destructive',
      compare_arrows:
        'flex size-10 items-center justify-center rounded-lg bg-primary-soft text-primary',
      savings:
        'flex size-10 items-center justify-center rounded-lg bg-accent-soft text-accent',
      warning:
        'flex size-10 items-center justify-center rounded-lg bg-accent-soft text-accent',
    };

    return variants[this.name];
  }
}
