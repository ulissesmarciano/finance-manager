import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionsTable } from './transactions-table';
import { provideRouter } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt-BR');

describe('TransactionsTable', () => {
  let component: TransactionsTable;
  let fixture: ComponentFixture<TransactionsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionsTable],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionsTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show translated payment methods', () => {
    const tableText = fixture.nativeElement.textContent;

    expect(tableText).toContain('FORMA');
    expect(tableText).toContain('Cartão de Crédito');
    expect(tableText).toContain('Dinheiro');
  });

  it('should expose the payment method label helper', () => {
    expect(component.getPaymentMethodLabel('pix')).toBe('Pix');
  });
});
