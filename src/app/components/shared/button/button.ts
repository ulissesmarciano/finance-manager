import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [MatIconModule],
  selector: 'app-button',
  templateUrl: './button.html',
})
export class Button {
  variant = input<'primary' | 'secondary'>('primary');
  icon = input<string | null>(null);
}
