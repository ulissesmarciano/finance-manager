import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecentTransactions } from './recent-transactions';
import { provideRouter } from '@angular/router';

registerLocaleData(localePt, 'pt-BR');

describe('RecentTransactions', () => {
  let component: RecentTransactions;
  let fixture: ComponentFixture<RecentTransactions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentTransactions],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(RecentTransactions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
