import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNativeDateAdapter } from '@angular/material/core';
import { TransactionFilters, type TransactionFiltersState } from './transaction-filters';
import { provideRouter } from '@angular/router';

describe('TransactionFilters', () => {
  let component: TransactionFilters;
  let fixture: ComponentFixture<TransactionFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionFilters],
      providers: [provideRouter([]), provideNativeDateAdapter()],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionFilters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the selected type', () => {
    const emitted: TransactionFiltersState[] = [];
    component.filtersChange.subscribe((filters) => emitted.push(filters));

    component.selectType('income');

    expect(emitted).toEqual([{ type: 'income', nature: 'all', paymentMethod: 'all' }]);
  });

  it('should emit the selected nature', () => {
    const emitted: TransactionFiltersState[] = [];
    component.filtersChange.subscribe((filters) => emitted.push(filters));

    component.selectNature('Fixa');

    expect(emitted).toEqual([{ type: 'all', nature: 'Fixa', paymentMethod: 'all' }]);
  });

  it('should emit the selected payment method', () => {
    const emitted: TransactionFiltersState[] = [];
    component.filtersChange.subscribe((filters) => emitted.push(filters));

    component.selectPaymentMethod('pix');

    expect(emitted).toEqual([{ type: 'all', nature: 'all', paymentMethod: 'pix' }]);
  });
});
