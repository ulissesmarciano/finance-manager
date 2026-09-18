import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Button } from './button';

describe('Button', () => {
  let component: Button;
  let fixture: ComponentFixture<Button>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button],
    }).compileComponents();

    fixture = TestBed.createComponent(Button);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the provided label', () => {
    fixture.componentRef.setInput('label', 'Salvar');
    fixture.detectChanges();

    const button = fixture.nativeElement as HTMLElement;

    expect(button.textContent).toContain('Salvar');
  });

  it('should render an icon when provided', () => {
    fixture.componentRef.setInput('icon', 'add');
    fixture.detectChanges();

    const icon = fixture.nativeElement.querySelector('mat-icon');

    expect(icon).toBeTruthy();
    expect(icon?.textContent?.trim()).toBe('add');
  });

  it('should emit clicked when pressed', () => {
    const spy = vi.fn();
    component.clicked.subscribe(spy);

    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    button.click();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should apply the selected variant and size classes', () => {
    fixture.componentRef.setInput('variant', 'secondary');
    fixture.componentRef.setInput('size', 'lg');
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;

    expect(button.classList.contains('bg-button-secondary')).toBe(true);
    expect(button.classList.contains('text-16')).toBe(true);
  });
});
