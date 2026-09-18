import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { CardsAccounts } from './cards-accounts';

describe('CardsAccounts', () => {
  let component: CardsAccounts;
  let fixture: ComponentFixture<CardsAccounts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsAccounts],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsAccounts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
