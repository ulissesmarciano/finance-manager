import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [MatIconModule],
  selector: 'app-input-component',
  templateUrl: './input-component.html',
})
export class InputComponent {
  label = input<string | null>(null);
  placeholder = input<string | null>(null);
  icon = input<string | null>(null);
  type = input<string | null>('text');
}
