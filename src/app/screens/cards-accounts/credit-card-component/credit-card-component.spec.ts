import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreditCardComponent } from './credit-card-component';

describe('CreditCardComponent', () => {
  let component: CreditCardComponent;
  let fixture: ComponentFixture<CreditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreditCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('applies the matching gradient for each card name', () => {
    const themes = [
      ['Caixa', 'from-primary', 'to-[oklch(0.52_0.16_262)]'],
      ['Bradesco', 'from-red-600', 'to-red-800'],
      ['PicPay', 'from-green-600', 'to-green-800'],
      ['Inter', 'from-orange-500', 'to-orange-700'],
    ] as const;

    for (const [cardName, fromClass, toClass] of themes) {
      fixture.componentRef.setInput('card', {
        name: cardName,
        flag: 'Visa',
        number: '•••• 4821',
        expirationDate: '12 set',
        cardLimit: 6000,
        cardBalance: 1840.5,
      });

      expect(component.cardThemeClasses).toBe(`${fromClass} ${toClass}`);
    }
  });

  it('calculates the used limit percentage from the card balance and limit', () => {
    fixture.componentRef.setInput('card', {
      name: 'Bradesco',
      flag: 'Visa',
      number: '•••• 4821',
      expirationDate: '12 set',
      cardLimit: 6000,
      cardBalance: 1840.5,
    });

    expect(component.limitPercent).toBeCloseTo(30.7);
  });

  it('returns zero when the card limit is zero', () => {
    fixture.componentRef.setInput('card', {
      name: 'Bradesco',
      flag: 'Visa',
      number: '•••• 4821',
      expirationDate: '12 set',
      cardLimit: 0,
      cardBalance: 100,
    });

    expect(component.limitPercent).toBe(0);
  });

  it('uses zero as the balance when cardBalance is missing', () => {
    fixture.componentRef.setInput('card', {
      name: 'Bradesco',
      flag: 'Visa',
      number: '•••• 4821',
      expirationDate: '12 set',
      cardLimit: 6000,
    });

    expect(component.limitPercent).toBe(0);
  });
});
