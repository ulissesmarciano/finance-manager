import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-date-picker',
  templateUrl: './date-picker.html',
})
export class DatePicker {
  @Input() placeholder = 'dd/mm/aaaa';
  @Input() label= '';
}
