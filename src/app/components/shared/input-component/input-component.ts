import { Component, Input, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [MatIconModule],
  selector: 'app-input-component',
  templateUrl: './input-component.html',
})
export class InputComponent {
  @Input() placeholder = 'Buscar transações'; 
  icon = input<string | null>(null);
}
