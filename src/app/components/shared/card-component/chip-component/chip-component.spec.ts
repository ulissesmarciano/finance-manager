import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChipComponent } from './chip-component';
import { describe, beforeEach, expect, it } from 'vitest';

describe('ChipComponent', () => {
  let component: ChipComponent;
  let fixture: ComponentFixture<ChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render', () => {
    expect(component).toBeTruthy();
  });

  it('should apply the selected variant', () => {
    fixture.componentRef.setInput('chipType', 'percentageChipComponent');
    fixture.componentRef.setInput('indicator', 90);
    fixture.detectChanges();

    const chipComponent = fixture.nativeElement.querySelector('span') as HTMLSpanElement;

    expect(chipComponent.classList.contains('bg-accent-soft')).toBe(true);
  });

  it('should apply the success variant when the indicator is below 90', () => {
    fixture.componentRef.setInput('chipType', 'percentageChipComponent');
    fixture.componentRef.setInput('indicator', 89);
    fixture.detectChanges();

    const chipComponent = fixture.nativeElement.querySelector('span') as HTMLSpanElement;

    expect(chipComponent.classList.contains('bg-success-soft')).toBe(true);
  });

  it('should apply the default variant when the indicator is null', () => {
    fixture.componentRef.setInput('chipType', 'percentageChipComponent');
    fixture.detectChanges();

    const chipComponent = fixture.nativeElement.querySelector('span') as HTMLSpanElement;

    expect(chipComponent.classList.contains('bg-background')).toBe(true);
  });

  it('should apply the metric variant for the north-east icon', () => {
    fixture.componentRef.setInput('icon', 'north_east');
    fixture.detectChanges();

    expect(component.variantMetricClasses()).toContain('bg-success-soft');
  });

  it('should apply the metric variant for the south-east icon', () => {
    fixture.componentRef.setInput('icon', 'south_east');
    fixture.detectChanges();

    expect(component.variantMetricClasses()).toContain('bg-destructive-soft');
  });

  it('should not apply a metric variant without an icon', () => {
    expect(component.variantMetricClasses()).toBe('');
  });
});
