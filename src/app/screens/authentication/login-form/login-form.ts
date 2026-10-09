import { Component, input, output } from '@angular/core';
import { InputComponent } from '../../../components/shared/input-component/input-component';
import { Button } from '../../../components/shared/button/button';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Link } from '../../../components/shared/link/link';

@Component({
  imports: [ReactiveFormsModule, InputComponent, Button, Link],
  selector: 'app-login-form',
  templateUrl: './login-form.html',
})
export class LoginForm {
  formGroup = input.required<
    FormGroup<{
      email: FormControl<string>;
      password: FormControl<string>;
      rememberMe: FormControl<boolean>;
    }>
  >();
  getErrorMessage = input.required<(control: AbstractControl) => string | null>();
  loginSubmitted = output<void>();
}
