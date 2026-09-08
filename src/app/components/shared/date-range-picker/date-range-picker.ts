import { Component } from '@angular/core';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.html',
})
export class DateRangePicker {
  startDate = '';
  endDate= '';
}
