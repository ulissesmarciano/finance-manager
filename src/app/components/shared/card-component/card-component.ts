import { Component, input } from '@angular/core';
import { Metric } from './metric/metric';

@Component({
  imports: [Metric],
  selector: 'app-card-component',
  templateUrl: './card-component.html',
})
export class CardComponent {
  type = input();
}
