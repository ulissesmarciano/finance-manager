import { Component, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [MatIconModule],
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
export class InputComponent implements ControlValueAccessor {
  label = input<string | null>(null);
  placeholder = input<string | null>(null);
  icon = input<string | null>(null);
  type = input<string | null>('text');
  value = signal<string | boolean>('');
  disabled = signal(false);
  errorMessage = input<string | null>(null);

  private onChange: (value: string | boolean) => void = () => undefined;
  private onTouched: () => void = () => undefined;

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
    const target = event.target as HTMLInputElement;
    const value = this.type() === 'checkbox' ? target.checked : target.value;
    this.value.set(value);
    this.onChange(value);
  }
}
