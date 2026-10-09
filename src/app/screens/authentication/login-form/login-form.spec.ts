import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginForm } from './login-form';
import { provideRouter } from '@angular/router';

describe('LoginForm', () => {
  let component: LoginForm;
  let fixture: ComponentFixture<LoginForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginForm],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginForm);
    fixture.componentRef.setInput(
      'formGroup',
      new FormGroup({
        email: new FormControl('', { nonNullable: true }),
        password: new FormControl('', { nonNullable: true }),
        rememberMe: new FormControl(false, { nonNullable: true }),
      }),
    );
    fixture.componentRef.setInput('getErrorMessage', () => null);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
