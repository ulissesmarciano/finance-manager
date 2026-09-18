import { describe, it, expect } from 'vitest';
import { DoughnutChart } from './doughnut-chart';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('DoughnutChart', () => {
  let component: DoughnutChart;
  let fixture: ComponentFixture<DoughnutChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoughnutChart],
    }).compileComponents();

    fixture = TestBed.createComponent(DoughnutChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render', () => {
    expect(component).toBeTruthy();
  });
});
