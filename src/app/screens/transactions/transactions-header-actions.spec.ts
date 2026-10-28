import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { beforeEach, describe, expect, it } from 'vitest';
import { TransactionsHeaderActions } from './transactions-header-actions';
import { TransactionModalState } from './transaction-modal-state';

describe('TransactionsHeaderActions', () => {
  let fixture: ComponentFixture<TransactionsHeaderActions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionsHeaderActions],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionsHeaderActions);
    fixture.detectChanges();
  });

  it('should render the configured action button', () => {
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;

    expect(button).toBeTruthy();
    expect(button.textContent).toContain('Adicionar transação');
  });

  it('should request opening the add transaction modal when the action button is clicked', () => {
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;

    button.click();

    expect(TestBed.inject(TransactionModalState).isOpen()).toBe(true);
  });
});
