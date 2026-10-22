import { Component, forwardRef, input, OnInit, signal } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

export interface SelectOption {
  value: string;
  label: string;
}

@Component({
  imports: [MatIconModule, MatSelectModule, FormsModule],
  selector: 'app-input-component',
  templateUrl: './input-component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor, OnInit {
  label = input<string | null>(null);
  placeholder = input<string | null>(null);
  icon = input<string | null>(null);
  type = input<string | null>('text');
  options = input<SelectOption[]>([]);
  value = signal<string | boolean>('');
  disabled = signal(false);
  hasError = input(false);
  errorMessage = input<string | null>(null);

  private onChange: (value: string | boolean) => void = () => undefined;
  private onTouched: () => void = () => undefined;

  ngOnInit(): void {
    const firstOption = this.options()[0];
    if (this.type() === 'select' && !this.value() && firstOption) {
      this.onSelectChange(firstOption.value);
    }
  }

  writeValue(value: string | boolean | null): void {
    this.value.set(value ?? '');
  }

  registerOnChange(fn: (value: string | boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled.set(disabled);
  }

  markTouched(): void {
    this.onTouched();
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement;
    const value = this.type() === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    this.value.set(value);
    this.onChange(value);
  }

  onSelectChange(value: string): void {
    this.value.set(value);
    this.onChange(value);
  }
}
