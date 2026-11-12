import { Component, input } from '@angular/core';

export interface Card {
  name: CardName;
  flag: CardFlag;
  number: string;
  expirationDate: string;
  cardBalance?: number;
  cardLimit: number;
}

type CardName = 'Bradesco' | 'PicPay' | 'Inter' | 'Caixa';
type CardFlag = 'Visa' | 'Mastercard' | 'Elo' | 'American Express' | 'Hipercard';

@Component({
  selector: 'app-credit-card-component',
  templateUrl: './credit-card-component.html',
})
export class CreditCardComponent {
  card = input<Card>();

  get limitPercent(): number {
    const card = this.card();
    if (!card || card.cardLimit <= 0) {
      return 0;
    }

    const percentage = ((card.cardBalance ?? 0) / card.cardLimit) * 100;
    return Math.round(Math.min(Math.max(percentage, 0), 100) * 10) / 10;
  }

  get cardThemeClasses(): string {
    switch (this.card()?.name.trim().toLowerCase()) {
      case 'bradesco':
        return 'from-red-600 to-red-800';
      case 'picpay':
        return 'from-green-600 to-green-800';
      case 'inter':
        return 'from-orange-500 to-orange-700';
      default:
        return 'from-primary to-[oklch(0.52_0.16_262)]';
    }
  }

  cardLimitRangeColor(limitPercentValue: number): string {
    const card = this.card();
    if (!card || card.cardLimit <= 0) {
      return 'bg-transparent';
    } else if (limitPercentValue > 80 && limitPercentValue <= 100) {
      return 'bg-accent';
    }
    return 'bg-primary';
  }
}
