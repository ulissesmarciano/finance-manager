import { Component, inject, input, output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Button } from '../button/button';
import { MatInputModule } from '@angular/material/input';
import { TitlesComponent } from '../titles-component/titles-component';
import { InputComponent, SelectOption } from '../input-component/input-component';
import type { Transaction } from '../../../screens/transactions/transactions-data';

type TransactionType = Transaction['type'];
type TransactionNature = Transaction['nature'];

const positiveAmountValidator: ValidatorFn = (control) => {
  if (control.value === '') {
    return null;
  }

  const amount = Number(control.value);
  return Number.isFinite(amount) && amount > 0 ? null : { positiveAmount: true };
};

@Component({
  imports: [
    MatIconModule,
    Button,
    MatInputModule,
    ReactiveFormsModule,
    TitlesComponent,
    InputComponent,
    MatSnackBarModule,
  ],
  selector: 'app-modal',
  templateUrl: './modal.html',
})
export class Modal {
  isOpen = input(false);
  closed = output<void>();
  transactionCreated = output<Transaction>();

  handleOverlayKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  handleContentKeydown(event: KeyboardEvent): void {
    event.stopPropagation();

    if (event.key === 'Escape') {
      this.close();
    }
  }

  readonly typeOptions: { value: TransactionType; label: string }[] = [
    { value: 'income', label: 'Receita' },
    { value: 'expense', label: 'Despesa' },
  ];

  readonly categoryOptions: SelectOption[] = [
    { value: 'home', label: 'Moradia' },
    { value: 'food', label: 'Alimentação' },
    { value: 'transport', label: 'Transporte' },
    { value: 'leisure', label: 'Lazer' },
    { value: 'wage', label: 'Salário' },
  ];

  readonly paymentOptions: SelectOption[] = [
    { value: 'pix', label: 'Pix' },
    { value: 'credit_card', label: 'Cartão de Crédito' },
    { value: 'debit_card', label: 'Cartão de Débito' },
    { value: 'cash', label: 'Dinheiro' },
    { value: 'savings', label: 'Poupança' },
  ];

  readonly form = new FormGroup({
    description: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    }),
    amount: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, positiveAmountValidator],
    }),
    date: new FormControl(this.today(), {
      nonNullable: true,
      validators: [Validators.required],
    }),
    category: new FormControl(this.categoryOptions[0].value, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    paymentMethod: new FormControl(this.paymentOptions[0].value, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    type: new FormControl<TransactionType>('expense', { nonNullable: true }),
    nature: new FormControl<TransactionNature>('Fixa', { nonNullable: true }),
  });

  private readonly snackBar = inject(MatSnackBar);

  selectType(value: TransactionType): void {
    this.form.controls.type.setValue(value);
  }

  selectNature(value: TransactionNature): void {
    this.form.controls.nature.setValue(value);
  }

  hasError(control: AbstractControl): boolean {
    return control.invalid && control.touched;
  }

  getErrorMessage(control: AbstractControl): string | null {
    if (!this.hasError(control)) {
      return null;
    }

    if (control.hasError('required')) {
      return 'Campo obrigatório.';
    }
    if (control.hasError('minlength')) {
      return 'Informe pelo menos 2 caracteres.';
    }
    if (control.hasError('positiveAmount')) {
      return 'Informe um valor maior que zero.';
    }

    return 'Valor inválido.';
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.snackBar.open('Preencha os campos obrigatórios.', 'Fechar', {
        duration: 3000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: ['error-snackbar'],
      });
      return;
    }

    const values = this.form.getRawValue();
    const category = this.categoryOptions.find((option) => option.value === values.category);
    if (!category) {
      this.form.controls.category.setErrors({ unknownOption: true });
      this.form.controls.category.markAsTouched();
      return;
    }

    const amount = Number(values.amount);
    const transaction: Transaction = {
      id: `tx-${Date.now()}-${crypto.randomUUID()}`,
      icon: 'account_balance_wallet',
      description: values.description.trim(),
      category: category.label,
      type: values.type,
      nature: values.nature,
      paymentMethod: values.paymentMethod,
      status: 'Pendente',
      date: values.date,
      amount: values.type === 'income' ? amount : -amount,
    };

    this.transactionCreated.emit(transaction);
    this.snackBar.open('Transação salva com sucesso.', '×', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['success-snackbar'],
    });
    this.close();
  }

  close(): void {
    this.resetForm();
    this.closed.emit();
  }

  private resetForm(): void {
    this.form.reset({
      description: '',
      amount: '',
      date: this.today(),
      category: this.categoryOptions[0].value,
      paymentMethod: this.paymentOptions[0].value,
      type: 'expense',
      nature: 'Fixa',
    });
  }

  private today(): string {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    return now.toISOString().slice(0, 10);
  }
}
