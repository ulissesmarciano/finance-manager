import { Component, input } from '@angular/core';

type TitleSize = 'sm' | 'md' | 'lg' | 'xlg';

@Component({
  imports: [],
  selector: 'app-titles-component',
  templateUrl: './titles-component.html',
})
export class TitlesComponent {
  title = input.required<string>();
  subtitle = input('');
  size = input.required<TitleSize>();
}
