import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BankAccountList } from './bank-account-list';

describe('BankAccountList', () => {
  let component: BankAccountList;
  let fixture: ComponentFixture<BankAccountList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankAccountList],
    }).compileComponents();

    fixture = TestBed.createComponent(BankAccountList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all mock bank accounts', () => {
    const accounts = fixture.nativeElement.querySelectorAll('li');
    const textContent = fixture.nativeElement.textContent.replace(/\s+/g, ' ');

    expect(accounts).toHaveLength(4);
    expect(textContent).toContain('Caixa de Investimentos');
    expect(textContent).toContain('Saldo total de R$ 47.091,47');
  });

  it('should use icons based on account type', () => {
    expect(component.getAccountIcon('Poupança')).toBe('savings');
    expect(component.getAccountIcon('Investimentos')).toBe('account_balance');
    expect(component.getAccountIcon('Corrente')).toBe('account_balance_wallet');
  });
});
