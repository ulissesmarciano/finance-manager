import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { InputComponent } from './input-component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle input when no change callback is registered', () => {
    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    input.value = 'teste';

    expect(() => input.dispatchEvent(new Event('input'))).not.toThrow();
    expect(component.value()).toBe('teste');
  });

  it('should handle blur when no touched callback is registered', () => {
    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;

    expect(() => input.dispatchEvent(new Event('blur'))).not.toThrow();
  });

  it('should call the registered touched callback', () => {
    const onTouched = vi.fn();
    component.registerOnTouched(onTouched);

    component.markTouched();

    expect(onTouched).toHaveBeenCalledOnce();
  });

  it('should update the value when writeValue receives a value', () => {
    component.writeValue('exemplo');

    expect(component.value()).toBe('exemplo');
  });

  it('should use an empty string when writeValue receives null', () => {
    component.writeValue(null);

    expect(component.value()).toBe('');
  });
});
