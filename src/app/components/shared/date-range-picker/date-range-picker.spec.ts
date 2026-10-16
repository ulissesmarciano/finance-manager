import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { DateRangePicker } from './date-range-picker';
import { provideNativeDateAdapter } from '@angular/material/core';

describe('DateRangePicker', () => {
  let component: DateRangePicker;
  let fixture: ComponentFixture<DateRangePicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateRangePicker],
      providers: [provideNativeDateAdapter()],
    }).compileComponents();

    fixture = TestBed.createComponent(DateRangePicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show placeholders for both dates', () => {
    const inputs = fixture.nativeElement.querySelectorAll('input');

    expect(inputs[0].getAttribute('placeholder')).toBe('Data inicial');
    expect(inputs[1].getAttribute('placeholder')).toBe('Data final');
  });
});
