import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Authentication } from './authentication';
import { provideRouter } from '@angular/router';

describe('Authentication', () => {
  let component: Authentication;
  let fixture: ComponentFixture<Authentication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Authentication],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Authentication);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render login inputs without a value accessor error', () => {
    fixture.detectChanges();

    const inputs = fixture.nativeElement.querySelectorAll('input');
    expect(inputs.length).toBeGreaterThanOrEqual(2);
    expect(inputs[0].type).toBe('email');
    expect(inputs[1].type).toBe('password');

    inputs[0].value = 'ulisses@example.com';
    inputs[0].dispatchEvent(new Event('input'));
    inputs[1].value = 'senha-segura';
    inputs[1].dispatchEvent(new Event('input'));

    expect(component.loginForm.controls.email.value).toBe('ulisses@example.com');
    expect(component.loginForm.controls.password.value).toBe('senha-segura');
    expect(component.loginForm.valid).toBe(true);
  });

  it('should bind the remember-me checkbox to the login form', () => {
    fixture.detectChanges();

    const checkbox = fixture.nativeElement.querySelector('input[type="checkbox"]');
    expect(checkbox.checked).toBe(false);
    expect(component.loginForm.controls.rememberMe.value).toBe(false);

    checkbox.checked = true;
    checkbox.dispatchEvent(new Event('change'));

    expect(component.loginForm.controls.rememberMe.value).toBe(true);
  });

  it('should update the selected auth mode', () => {
    component.selectAuthMode('register');

    expect(component.selectedAuthMode()).toBe('register');
  });

  it('should log login data when the login form is valid', () => {
    const logSpy = vi.spyOn(console, 'log');
    component.loginForm.setValue({
      email: 'ulisses@example.com',
      password: 'senha-segura',
      rememberMe: false,
    });

    component.onSubmitLogin();

    expect(logSpy).toHaveBeenCalledWith('Login form submitted:', component.loginForm.value);
  });

  it('should log an error when the login form is invalid', () => {
    const logSpy = vi.spyOn(console, 'log');

    component.onSubmitLogin();

    expect(logSpy).toHaveBeenCalledWith('Login form is invalid');
  });

  it('should log registration data when the register form is valid', () => {
    const logSpy = vi.spyOn(console, 'log');
    component.registerForm.setValue({
      name: 'Ulisses Marciano',
      email: 'ulisses@example.com',
      password: 'senha-segura',
    });

    component.onSubmitRegister();

    expect(logSpy).toHaveBeenCalledWith('Register form submitted:', component.registerForm.value);
  });

  it('should log an error when the register form is invalid', () => {
    const logSpy = vi.spyOn(console, 'log');

    component.onSubmitRegister();

    expect(logSpy).toHaveBeenCalledWith('Register form is invalid');
  });
});
