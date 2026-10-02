import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { beforeEach, describe, expect, it } from 'vitest';
import { TransactionsHeaderActions } from './transactions-header-actions';

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
    expect(button.textContent).toContain('Novo orçamento');
  });
});
