import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-titles-component',
  templateUrl: './titles-component.html',
})
export class TitlesComponent {
  title = input.required<string>();
  subtitle = input('');
}
