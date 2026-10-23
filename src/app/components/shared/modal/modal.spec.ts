import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { describe, beforeEach, it, expect, vi } from 'vitest';
import { Modal } from './modal';

describe('Modal', () => {
  let component: Modal;
  let fixture: ComponentFixture<Modal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modal],
    }).compileComponents();

    fixture = TestBed.createComponent(Modal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit closed when Escape is pressed on the overlay', () => {
    const emitSpy = vi.spyOn(component.closed, 'emit');

    component.handleOverlayKeydown(new KeyboardEvent('keydown', { key: 'Escape' }));

    expect(emitSpy).toHaveBeenCalledOnce();
  });

  it('should not emit closed for other overlay keys', () => {
    const emitSpy = vi.spyOn(component.closed, 'emit');

    component.handleOverlayKeydown(new KeyboardEvent('keydown', { key: 'Enter' }));

    expect(emitSpy).not.toHaveBeenCalled();
  });

  it('should stop content keydown propagation and emit on Escape', () => {
    const emitSpy = vi.spyOn(component.closed, 'emit');
    const event = {
      key: 'Escape',
      stopPropagation: vi.fn(),
    } as unknown as KeyboardEvent;

    component.handleContentKeydown(event);

    expect(event.stopPropagation).toHaveBeenCalledOnce();
    expect(emitSpy).toHaveBeenCalledOnce();
  });

  it('should stop content keydown propagation without emitting for other keys', () => {
    const emitSpy = vi.spyOn(component.closed, 'emit');
    const event = {
      key: 'Enter',
      stopPropagation: vi.fn(),
    } as unknown as KeyboardEvent;

    component.handleContentKeydown(event);

    expect(event.stopPropagation).toHaveBeenCalledOnce();
    expect(emitSpy).not.toHaveBeenCalled();
  });

  it('should mark required fields as touched when submitting an invalid form', () => {
    const emitSpy = vi.spyOn(component.transactionCreated, 'emit');

    component.onSubmit();

    expect(component.form.invalid).toBe(true);
    expect(component.form.controls.description.touched).toBe(true);
    expect(component.form.controls.amount.touched).toBe(true);
    expect(emitSpy).not.toHaveBeenCalled();
  });

  it('should emit a transaction and close after submitting valid values', () => {
    const transactionSpy = vi.spyOn(component.transactionCreated, 'emit');
    const closedSpy = vi.spyOn(component.closed, 'emit');
    const snackBarSpy = vi.spyOn(fixture.debugElement.injector.get(MatSnackBar), 'open');
    component.form.setValue({
      description: 'Salário',
      amount: '1250.50',
      date: '2026-10-22',
      category: 'wage',
      paymentMethod: 'pix',
      type: 'income',
      nature: 'Variável',
    });

    component.onSubmit();

    expect(transactionSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        description: 'Salário',
        amount: 1250.5,
        category: 'Salário',
        type: 'income',
        nature: 'Variável',
        paymentMethod: 'pix',
        status: 'Pendente',
      }),
    );
    expect(closedSpy).toHaveBeenCalledOnce();
    expect(snackBarSpy).toHaveBeenCalledWith(
      'Transação salva com sucesso.',
      '×',
      expect.objectContaining({
        duration: 3000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: ['success-snackbar'],
      }),
    );
    expect(component.form.controls.description.value).toBe('');
  });
  it('should update the selected type', () => {
    component.selectType('expense');

    expect(component.form.controls.type.value).toBe('expense');
  });

  it('should update the selected nature', () => {
    component.selectNature('Variável');

    expect(component.form.controls.nature.value).toBe('Variável');
  });

  it('should report an error when the control is invalid and touched', () => {
    const control = component.form.controls.description;

    control.markAsTouched();

    expect(component.hasError(control)).toBe(true);
  });

  it('should return null when hassError has not control', () => {
    const control = component.form.controls.description;

    expect(component.getErrorMessage(control)).toBe(null);
  });

  it('should return the appropriate message for each validation error', () => {
    const control = component.form.controls.description;
    control.setErrors({ required: true });
    control.markAsTouched();

    expect(component.getErrorMessage(control)).toBe('Campo obrigatório.');

    control.setErrors({ minlength: { requiredLength: 2, actualLength: 1 } });
    expect(component.getErrorMessage(control)).toBe('Informe pelo menos 2 caracteres.');

    control.setErrors({ unknown: true });
    expect(component.getErrorMessage(control)).toBe('Valor inválido.');
  });

  it('should return the positive amount message when teh amount is zero', () => {
    const control = component.form.controls.amount;
    control.setValue('0');
    control.markAllAsTouched();

    expect(component.getErrorMessage(control)).toBe('Informe um valor maior que zero.');
  });

  it('should set an error when the submitted category is unknown', () => {
    const emitSpy = vi.spyOn(component.transactionCreated, 'emit');
    const closedSpy = vi.spyOn(component.closed, 'emit');

    component.form.setValue({
      description: 'Salário',
      amount: '1250.50',
      date: '2026-10-22',
      category: 'unknown-category',
      paymentMethod: 'pix',
      type: 'income',
      nature: 'Variável',
    });

    component.onSubmit();

    expect(component.form.controls.category.errors).toEqual({
      unknownOption: true,
    });
    expect(component.form.controls.category.touched).toBe(true);
    expect(emitSpy).not.toHaveBeenCalled();
    expect(closedSpy).not.toHaveBeenCalled();
  });

  it('should emit an expense with a negative amount', () => {
    const transactionSpy = vi.spyOn(component.transactionCreated, 'emit');

    component.form.setValue({
      description: 'Mercado',
      amount: '125.50',
      date: '2026-10-22',
      category: 'food',
      paymentMethod: 'pix',
      type: 'expense',
      nature: 'Fixa',
    });

    component.onSubmit();

    expect(transactionSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'expense',
        amount: -125.5,
      }),
    );
  });
});
