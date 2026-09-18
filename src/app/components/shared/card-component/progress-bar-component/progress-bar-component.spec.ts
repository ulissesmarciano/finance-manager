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

  it('should apply primary variant whyen the indicator is below 90', () => {
    fixture.componentRef.setInput('barType', 'single-bar');
    fixture.componentRef.setInput('percentage', 89);
    fixture.detectChanges();

    const progressBarComponent = fixture.nativeElement.querySelector('span') as HTMLSpanElement;

    expect(progressBarComponent.classList.contains('bg-primary')).toBe(true);
  });

  it('should apply accent variant whyen the indicator is above 89', () => {
    fixture.componentRef.setInput('barType', 'single-bar');
    fixture.componentRef.setInput('percentage', 90);
    fixture.detectChanges();

    const progressBarComponent = fixture.nativeElement.querySelector('span') as HTMLSpanElement;

    expect(progressBarComponent.classList.contains('bg-accent')).toBe(true);
  });
});
