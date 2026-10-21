import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionsTable } from './transactions-table';

describe('TransactionsTable', () => {
  let component: TransactionsTable;
  let fixture: ComponentFixture<TransactionsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionsTable],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionsTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show translated payment methods', () => {
    const tableText = fixture.nativeElement.textContent;

    expect(tableText).toContain('FORMA DE PAGAMENTO');
    expect(tableText).toContain('Cartão de Crédito');
    expect(tableText).toContain('Dinheiro');
  });
});
