import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { CardComponent } from './card-component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the selected period', () => {
    component.selectPeriod('7-days');

    expect(component.selectedPeriod()).toBe('7-days');
  });

  it('should return the color at the requested donut index', () => {
    component.donutChartData = {
      labels: ['Receitas'],
      datasets: [{ data: [100], backgroundColor: ['#00ff00'] }],
    };

    expect(component.getDonutColor(0)).toBe('#00ff00');
  });

  it('should return undefined when the donut index does not exist', () => {
    component.donutChartData = {
      labels: ['Receitas'],
      datasets: [{ data: [100], backgroundColor: ['#00ff00'] }],
    };

    expect(component.getDonutColor(1)).toBeUndefined();
  });

  it('should return the shared donut color when backgroundColor is a string', () => {
    component.donutChartData = {
      labels: ['Receitas'],
      datasets: [{ data: [100], backgroundColor: '#00ff00' }],
    };

    expect(component.getDonutColor(0)).toBe('#00ff00');
  });

  it('should return undefined when there is no donut background color', () => {
    expect(component.getDonutColor(0)).toBeUndefined();
  });
});
