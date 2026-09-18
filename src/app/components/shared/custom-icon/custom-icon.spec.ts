import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { CustomIcon } from './custom-icon';

describe('CustomIcon', () => {
  let component: CustomIcon;
  let fixture: ComponentFixture<CustomIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomIcon],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply the sucess clas when icon name is north-east', () => {
    fixture.componentRef.setInput('name', 'north_east');
    fixture.detectChanges();

    expect(component.variantClasses()).toContain('bg-success-soft');
  });
});
