import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarChart } from './bar-chart';
import { describe, beforeEach, it } from 'vitest';

describe('BarChart', () => {
  let component: BarChart;
  let fixture: ComponentFixture<BarChart>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarChart],
    }).compileComponents();

    fixture = TestBed.createComponent(BarChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render', () => {
    expect(component).toBeTruthy();
  });
});
