import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DateRangePicker } from '../../../components/shared/date-range-picker/date-range-picker';
import { MatInputModule } from '@angular/material/input';
import { Button } from '../../../components/shared/button/button';
import { PAYMENT_METHOD_OPTIONS } from '../payment-methods';

@Component({
  imports: [DateRangePicker, MatIcon, MatInputModule, Button],
  selector: 'app-transaction-filters',
  templateUrl: './transaction-filters.html',
})
export class TransactionFilters {
  readonly typeOptions = [
    { value: 'all', label: 'Todas' },
    { value: 'income', label: 'Receita' },
    { value: 'expense', label: 'Despesa' },
  ];
  selectedType = 'all';

  readonly natureOptions = [
    { value: 'all', label: 'Todas' },
    { value: 'fixa', label: 'Fixa' },
    { value: 'variable', label: 'Variável' },
  ];
  selectedNature = 'all';

  readonly paymentMethodOptions = [{ value: 'all', label: 'Todas' }, ...PAYMENT_METHOD_OPTIONS];
  selectedPaymentMethod = 'all';
}
