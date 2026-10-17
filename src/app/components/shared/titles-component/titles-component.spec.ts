import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { TitlesComponent } from './titles-component';

describe('TitlesComponent', () => {
  let component: TitlesComponent;
  let fixture: ComponentFixture<TitlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitlesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TitlesComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('title', 'Resumo');
    fixture.componentRef.setInput('size', 'md');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title when size is small', () => {
    fixture.componentRef.setInput('size', 'sm');
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Resumo');
  });
});
