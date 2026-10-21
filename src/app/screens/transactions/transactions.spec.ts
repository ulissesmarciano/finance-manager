import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { Transactions } from './transactions';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideRouter } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt-BR');

describe('Transactions', () => {
  let component: Transactions;
  let fixture: ComponentFixture<Transactions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Transactions],
      providers: [provideRouter([]), provideNativeDateAdapter()],
    }).compileComponents();

    fixture = TestBed.createComponent(Transactions);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter transactions by type, nature, and payment method', () => {
    component.onFiltersChange({
      type: 'income',
      nature: 'all',
      paymentMethod: 'all',
    });
    expect(
      component.filteredTransactions.every((transaction) => transaction.type === 'income'),
    ).toBe(true);
    component.onFiltersChange({
      type: 'all',
      nature: 'Fixa',
      paymentMethod: 'all',
    });
    expect(
      component.filteredTransactions.every((transaction) => transaction.nature === 'Fixa'),
    ).toBe(true);
    component.onFiltersChange({
      type: 'all',
      nature: 'all',
      paymentMethod: 'pix',
    });
    expect(
      component.filteredTransactions.every((transaction) => transaction.paymentMethod === 'pix'),
    ).toBe(true);
    component.onFiltersChange({
      type: 'income',
      nature: 'Variável',
      paymentMethod: 'pix',
    });
    expect(component.filteredTransactions.map((transaction) => transaction.id)).toEqual([
      'tx-2026-08-21-design',
    ]);
    component.onFiltersChange({
      type: 'income',
      nature: 'Fixa',
      paymentMethod: 'pix',
    });
    expect(component.filteredTransactions).toEqual([]);
  });
});
