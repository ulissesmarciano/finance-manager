import { describe, it, beforeEach, expect } from 'vitest';
import { ProgressBarComponent } from './progress-bar-component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ProgressBarComponent', () => {
  let component: ProgressBarComponent;
  let fixture: ComponentFixture<ProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render', () => {
    expect(component).toBeTruthy();
  });

  it('should apply accent variant to a growing bar below 80', () => {
    fixture.componentRef.setInput('barType', 'single-bar');
    fixture.componentRef.setInput('percentage', 79);
    fixture.detectChanges();

    const progressBarComponent = fixture.nativeElement.querySelector('span') as HTMLSpanElement;

    expect(progressBarComponent.classList.contains('bg-accent')).toBe(true);
  });

  it('should apply primary variant to a growing bar at 80 or above', () => {
    fixture.componentRef.setInput('barType', 'single-bar');
    fixture.componentRef.setInput('percentage', 80);
    fixture.detectChanges();

    const progressBarComponent = fixture.nativeElement.querySelector('span') as HTMLSpanElement;

    expect(progressBarComponent.classList.contains('bg-primary')).toBe(true);
  });

  it('should use the descending color variants below and at the threshold', () => {
    fixture.componentRef.setInput('barType', 'single-bar');
    fixture.componentRef.setInput('singleBarType', 'descending');
    fixture.componentRef.setInput('percentage', 79);
    fixture.detectChanges();

    const progressBar = fixture.nativeElement.querySelector('span') as HTMLSpanElement;
    expect(progressBar.classList.contains('bg-primary')).toBe(true);

    fixture.componentRef.setInput('percentage', 80);
    fixture.detectChanges();

    expect(progressBar.classList.contains('bg-accent')).toBe(true);
  });

  it('should show the current, total, remaining values, and derive the percentage from the range', () => {
    fixture.componentRef.setInput('barType', 'single-bar');
    fixture.componentRef.setInput('valueRange', { current: 200, total: 1000 });
    fixture.detectChanges();

    const progressBar = fixture.nativeElement.querySelector('span') as HTMLSpanElement;
    const text = fixture.nativeElement.textContent as string;

    expect(progressBar.style.width).toBe('20%');
    expect(text).toContain('200,00');
    expect(text).toContain('1.000,00');
    expect(text).toContain('800,00');
    expect(text).toContain('restantes');
  });

  it('should show only the completion percentage when requested', () => {
    fixture.componentRef.setInput('barType', 'single-bar');
    fixture.componentRef.setInput('valueRange', { current: 200, total: 1000 });
    fixture.componentRef.setInput('valueRangeDisplay', 'completion');
    fixture.detectChanges();

    const text = fixture.nativeElement.textContent as string;

    expect(text).toContain('20% concluído');
    expect(text).not.toContain('restantes');
    expect(text).not.toContain('200,00');
  });

  it('should use zero progress and zero remaining when the total is zero', () => {
    fixture.componentRef.setInput('barType', 'single-bar');
    fixture.componentRef.setInput('valueRange', { current: 200, total: 0 });
    fixture.detectChanges();

    const progressBar = fixture.nativeElement.querySelector('span') as HTMLSpanElement;
    const text = fixture.nativeElement.textContent as string;

    expect(progressBar.style.width).toBe('0%');
    expect(text).toContain('0,00 restantes');
  });
});
