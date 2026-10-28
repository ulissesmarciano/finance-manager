import { Component, output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DateRangePicker } from '../../../components/shared/date-range-picker/date-range-picker';
import { MatInputModule } from '@angular/material/input';
import { Button } from '../../../components/shared/button/button';
import { PAYMENT_METHOD_OPTIONS } from '../payment-methods';

export interface TransactionFiltersState {
  type: 'all' | 'income' | 'expense';
  nature: 'all' | 'Fixa' | 'Variável';
  paymentMethod: string;
}

@Component({
  imports: [DateRangePicker, MatIcon, MatInputModule, Button],
  selector: 'app-transaction-filters',
  templateUrl: './transaction-filters.html',
})
export class TransactionFilters {
  readonly filtersChange = output<TransactionFiltersState>();

  readonly typeOptions: { value: TransactionFiltersState['type']; label: string }[] = [
    { value: 'all', label: 'Todas' },
    { value: 'income', label: 'Receita' },
    { value: 'expense', label: 'Despesa' },
  ];
  selectedType: TransactionFiltersState['type'] = 'all';

  readonly natureOptions: { value: TransactionFiltersState['nature']; label: string }[] = [
    { value: 'all', label: 'Todas' },
    { value: 'Fixa', label: 'Fixa' },
    { value: 'Variável', label: 'Variável' },
  ];
  selectedNature: TransactionFiltersState['nature'] = 'all';

  readonly paymentMethodOptions = [{ value: 'all', label: 'Todas' }, ...PAYMENT_METHOD_OPTIONS];
  selectedPaymentMethod = 'all';

  selectType(value: TransactionFiltersState['type']): void {
    this.selectedType = value;
    this.emitFilters();
  }

  selectNature(value: TransactionFiltersState['nature']): void {
    this.selectedNature = value;
    this.emitFilters();
  }

  selectPaymentMethod(value: string): void {
    this.selectedPaymentMethod = value;
    this.emitFilters();
  }

  private emitFilters(): void {
    this.filtersChange.emit({
      type: this.selectedType,
      nature: this.selectedNature,
      paymentMethod: this.selectedPaymentMethod,
    });
  }
}
