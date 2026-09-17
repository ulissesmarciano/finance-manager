import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { describe, beforeEach, it, expect } from 'vitest';
import { MenuItem } from './menu-item';

describe('MenuItem', () => {
  let component: MenuItem;
  let fixture: ComponentFixture<MenuItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuItem],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuItem);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('label', 'Home');
    fixture.componentRef.setInput('route', '/');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
