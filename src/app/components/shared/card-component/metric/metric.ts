import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-metric',
  templateUrl: './metric.html',
})
export class Metric {
  @Input() label = '';
  @Input() value = '';
}
