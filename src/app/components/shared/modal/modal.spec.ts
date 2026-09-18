import { ComponentFixture, TestBed } from '@angular/core/testing';
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
});
