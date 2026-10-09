import { Component, Input } from '@angular/core';

type BarType = 'single-bar' | 'versus-bar';

@Component({
  imports: [],
  selector: 'app-progress-bar-component',
  templateUrl: './progress-bar-component.html',
})
export class ProgressBarComponent {
  @Input() barType: BarType | null = null;
  @Input() percentage = 0;

  variantSingleBarClasses(): string {
    if (this.percentage < 90) {
      return 'bg-primary rounded-sm';
    }
    return 'bg-accent rounded-sm'
  }
}
