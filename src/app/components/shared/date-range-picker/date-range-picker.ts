import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  imports: [MatDatepickerModule, MatFormFieldModule, MatInputModule],
  standalone: true,
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.html',
})
export class DateRangePicker {
  startDate: Date | null = null;
  endDate: Date | null = null;
}
