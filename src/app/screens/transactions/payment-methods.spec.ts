import { describe, expect, it } from 'vitest';
import {
  PAYMENT_METHOD_LABELS,
  PAYMENT_METHOD_OPTIONS,
  getPaymentMethodLabel,
} from './payment-methods';

describe('payment methods', () => {
  it('should return a label for each known payment method', () => {
    for (const [method, label] of Object.entries(PAYMENT_METHOD_LABELS)) {
      expect(getPaymentMethodLabel(method)).toBe(label);
    }
  });

  it('should return the method itself when its label is unknown', () => {
    expect(getPaymentMethodLabel('other')).toBe('other');
  });

  it('should expose payment methods as options', () => {
    expect(PAYMENT_METHOD_OPTIONS).toEqual([
      { value: 'pix', label: 'Pix' },
      { value: 'credit_card', label: 'Cartão de Crédito' },
      { value: 'debit_card', label: 'Cartão de Débito' },
      { value: 'cash', label: 'Dinheiro' },
      { value: 'savings', label: 'Poupança' },
    ]);
  });
});
