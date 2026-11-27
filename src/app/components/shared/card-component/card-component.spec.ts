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
    fixture.componentRef.setInput('donutChartData', {
      labels: ['Receitas'],
      datasets: [{ data: [100], backgroundColor: ['#00ff00'] }],
    });

    expect(component.getDonutColor(0)).toBe('#00ff00');
  });

  it('should return undefined when the donut index does not exist', () => {
    fixture.componentRef.setInput('donutChartData', {
      labels: [{ name: 'Receitas' }],
      datasets: [{ data: [100], backgroundColor: ['#00ff00'] }],
    });

    expect(component.getDonutColor(1)).toBeUndefined();
  });

  it('should return the shared donut color when backgroundColor is a string', () => {
    fixture.componentRef.setInput('donutChartData', {
      labels: ['Receitas'],
      datasets: [{ data: [100], backgroundColor: '#00ff00' }],
    });

    expect(component.getDonutColor(0)).toBe('#00ff00');
  });

  it('should return undefined when there is no donut background color', () => {
    expect(component.getDonutColor(0)).toBeUndefined();
  });

  it('should show the budget warning only when the percentage is greater than 80', () => {
    fixture.componentRef.setInput('type', 'budget');

    fixture.componentRef.setInput('chipPercentage', 80);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).not.toContain('Você está se aproximando do limite.');

    fixture.componentRef.setInput('chipPercentage', 81);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Você está se aproximando do limite.');

    fixture.componentRef.setInput('chipPercentage', null);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).not.toContain('Você está se aproximando do limite.');
  });

  it('should pass the value range to the single progress bar', () => {
    fixture.componentRef.setInput('type', 'budget');
    fixture.componentRef.setInput('barType', 'single-bar');
    fixture.componentRef.setInput('chipPercentage', 75);
    fixture.componentRef.setInput('valueRange', { current: 200, total: 1000 });
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('20% usado');
    expect(fixture.nativeElement.textContent).toContain('800,00');
    expect(fixture.nativeElement.textContent).toContain('restantes');
  });

  it('should derive the budget warning from the value range without chipPercentage', () => {
    fixture.componentRef.setInput('type', 'budget');
    fixture.componentRef.setInput('barType', 'single-bar');
    fixture.componentRef.setInput('valueRange', { current: 810, total: 1000 });
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('81% usado');
    expect(fixture.nativeElement.textContent).toContain('Você está se aproximando do limite.');
  });
});
