import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DateRangePicker } from '../../../components/shared/date-range-picker/date-range-picker';
import { MatInputModule } from '@angular/material/input';
import { Button } from '../../../components/shared/button/button';

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

  readonly paymentMethodOptions = [
    { value: 'all', label: 'Todas' },
    { value: 'pix', label: 'Pix' },
    { value: 'credit_card', label: 'Cartão de Crédito' },
    { value: 'debit_card', label: 'Cartão de Débito' },
    { value: 'cash', label: 'Dinheiro' },
    { value: 'savings', label: 'Poupança' },
  ];
  selectedPaymentMethod = 'all';
}
