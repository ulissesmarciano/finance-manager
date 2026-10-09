import { Component, inject, signal } from '@angular/core';
import { Logo } from '../../components/shared/logo/logo';
import { TitlesComponent } from '../../components/shared/titles-component/titles-component';
import { Link } from '../../components/shared/link/link';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginForm } from './login-form/login-form';
import { RegisterForm } from './register-form/register-form';

type Auth = 'login' | 'register';

@Component({
  imports: [ReactiveFormsModule, Logo, TitlesComponent, Link, LoginForm, RegisterForm],
  selector: 'app-authentication',
  templateUrl: './authentication.html',
})
export class Authentication {
  selectedAuthMode = signal<Auth>('login');

  selectAuthMode(auth: Auth) {
    this.selectedAuthMode.set(auth);
  }
  private fb = inject(FormBuilder);

  loginForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    rememberMe: false,
  });

  registerForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmitLogin() {
    if (this.loginForm.valid) {
      console.log('Login form submitted:', this.loginForm.value);
    } else {
      this.loginForm.markAllAsTouched();
      console.log('Login form is invalid');
    }
  }

  onSubmitRegister() {
    if (this.registerForm.valid) {
      console.log('Register form submitted:', this.registerForm.value);
    } else {
      this.registerForm.markAllAsTouched();
      console.log('Register form is invalid');
    }
  }

  getErrorMessage(control: AbstractControl): string | null {
    if (!control.touched) return null;

    if (control.hasError('required')) return 'Este campo é obrigatório.';
    if (control.hasError('email')) return 'Informe um e-mail válido.';

    if (control.hasError('minlength')) {
      const minLength = control.getError('minlength').requiredLength;
      return `Informe pelo menos ${minLength} caracteres.`;
    }

    return null;
  }
}
