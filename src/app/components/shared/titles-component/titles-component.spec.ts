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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});