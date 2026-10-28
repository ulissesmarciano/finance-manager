import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { Transactions } from './transactions';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideRouter } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { TransactionModalState } from './transaction-modal-state';

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

  it('should open the add transaction modal when clicking the add button', () => {
    const addButton = fixture.nativeElement.querySelector(
      'button[aria-label="Adicionar transação"]',
    ) as HTMLButtonElement;

    addButton.click();
    fixture.detectChanges();

    expect(component.transactionModalState.isOpen()).toBe(true);
    expect(component.editingTransaction).toBeNull();
    expect(fixture.nativeElement.querySelector('[role="dialog"]')).toBeTruthy();
  });

  it('should open the edit transaction modal when clicking an edit button', () => {
    const editButton = fixture.nativeElement.querySelector(
      'app-button[aria-label="Editar transação"] button',
    ) as HTMLButtonElement | null;

    expect(editButton).not.toBeNull();

    editButton!.click();
    fixture.detectChanges();

    expect(component.transactionModalState.isOpen()).toBe(true);
    expect(component.editingTransaction).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[role="dialog"]')).toBeTruthy();
  });

  it('should render and close the add transaction modal on the transactions page', () => {
    const modalState = TestBed.inject(TransactionModalState);
    modalState.open();
    fixture.detectChanges();

    const closeButton = fixture.nativeElement.querySelector(
      'app-modal button',
    ) as HTMLButtonElement;
    expect(closeButton).toBeTruthy();

    closeButton.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('[role="dialog"]')).toBeNull();
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

  it('should add a newly created transaction to the table', () => {
    component.onTransactionCreated({
      id: 'tx-new',
      icon: 'account_balance_wallet',
      description: 'Nova transação',
      category: 'Moradia',
      type: 'expense',
      nature: 'Fixa',
      paymentMethod: 'pix',
      status: 'Pendente',
      date: '2026-10-22',
      amount: -25,
    });

    expect(component.filteredTransactions[0].id).toBe('tx-new');
  });

  it('should update a transaction and reapply the active filters', () => {
    component.onFiltersChange({
      type: 'income',
      nature: 'all',
      paymentMethod: 'all',
    });

    const existing = component.filteredTransactions.find(
      (transaction) => transaction.id === 'tx-2026-08-21-design',
    );

    expect(existing).toBeDefined();

    if (!existing) {
      throw new Error('Expected the transaction to exist in the filtered list');
    }

    component.onTransactionUpdated({
      ...existing,
      description: 'Freelance atualizado',
      type: 'expense',
    });

    expect(
      component.filteredTransactions.some((transaction) => transaction.id === existing.id),
    ).toBe(false);

    component.onFiltersChange({
      type: 'all',
      nature: 'all',
      paymentMethod: 'all',
    });

    expect(
      component.filteredTransactions.find((transaction) => transaction.id === existing.id),
    ).toMatchObject({
      description: 'Freelance atualizado',
      type: 'expense',
    });
  });
});
