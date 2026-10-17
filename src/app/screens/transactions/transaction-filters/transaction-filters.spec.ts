import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNativeDateAdapter } from '@angular/material/core';
import { TransactionFilters } from './transaction-filters';
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
});
