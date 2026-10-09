import { Component, input, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [MatIconModule],
  selector: 'app-input-component',
  templateUrl: './input-component.html',
})
export class InputComponent {
  @Input() placeholder: string | null = null;
  icon = input<string | null>(null);
  @Input() type: 'text' | 'number' = 'text';
}
