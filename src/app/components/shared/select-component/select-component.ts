import { Component, Input } from '@angular/core';

export interface SelectOption {
  value: string;
  label: string;
}

@Component({
  imports: [],
  standalone: true,
  selector: 'app-select-component',
  templateUrl: './select-component.html',
})
export class SelectComponent {
  @Input() label = '';
  @Input({ required: true }) options?: SelectOption[] = [];
}
