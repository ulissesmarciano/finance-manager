import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { Dashboard } from './dashboard';
import { provideRouter } from '@angular/router';
import { provideNativeDateAdapter } from '@angular/material/core';

registerLocaleData(localePt, 'pt-BR');

describe('Dashboard', () => {
  let component: Dashboard;
  let fixture: ComponentFixture<Dashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboard],
      providers: [provideRouter([]), provideNativeDateAdapter()],
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open and close the modal', () => {
    expect(component.isModalOpen).toBe(false);

    component.openModal();
    expect(component.isModalOpen).toBe(true);

    component.closeModal();
    expect(component.isModalOpen).toBe(false);
  });

  it('should format monthly chart axis values in thousands', () => {
    const callback = component.monthlyChartOptions?.scales?.['y']?.ticks?.callback;

    expect(callback).toBeDefined();
    expect(Reflect.apply(callback!, undefined, [3000, 0, []])).toBe('3k');
  });
});
