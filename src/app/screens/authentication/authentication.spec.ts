import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Authentication } from './authentication';
import { provideRouter } from '@angular/router';

describe('Authentication', () => {
  let component: Authentication;
  let fixture: ComponentFixture<Authentication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Authentication],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Authentication);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the selected auth mode', () => {
    component.selectAuthMode('register');

    expect(component.selectedAuthMode()).toBe('register');
  });
});
