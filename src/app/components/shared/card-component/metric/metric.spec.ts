import { describe, it, beforeEach, expect } from 'vitest';
import { Metric } from './metric';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('Metric', () => {
  let component: Metric;
  let fixture: ComponentFixture<Metric>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Metric],
    }).compileComponents();

    fixture = TestBed.createComponent(Metric);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render', () => {
    expect(component).toBeTruthy();
  });
});
