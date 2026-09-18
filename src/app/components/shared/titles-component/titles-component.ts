import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-titles-component',
  templateUrl: './titles-component.html',
})
export class TitlesComponent {
  @Input() title = '';
  @Input() subTitle = '';
}
