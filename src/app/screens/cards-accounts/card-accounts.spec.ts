import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { CardsAccounts } from './cards-accounts';
import { provideRouter } from '@angular/router';

describe('CardsAccounts', () => {
  let component: CardsAccounts;
  let fixture: ComponentFixture<CardsAccounts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsAccounts],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsAccounts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select the credit card type', () => {
    component.selectType('account-balance');
    expect(component.selectedType).toBe('account-balance');
  });
});
