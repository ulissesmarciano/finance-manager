import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { TargetsQuotes } from './targets-quotes';

describe('TargetsQuotes', () => {
  let component: TargetsQuotes;
  let fixture: ComponentFixture<TargetsQuotes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetsQuotes],
    }).compileComponents();

    fixture = TestBed.createComponent(TargetsQuotes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
