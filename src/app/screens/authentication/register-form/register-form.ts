import { Component, input, output } from '@angular/core';
import { InputComponent } from '../../../components/shared/input-component/input-component';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Button } from '../../../components/shared/button/button';

@Component({
  imports: [ReactiveFormsModule, InputComponent, Button],
  selector: 'app-register-form',
  templateUrl: './register-form.html',
})
export class RegisterForm {
  formGroup = input.required<
    FormGroup<{
      name: FormControl<string>;
      email: FormControl<string>;
      password: FormControl<string>;
    }>
  >();
  getErrorMessage = input.required<(control: AbstractControl) => string | null>();
  registerSubmitted = output<void>();
}
