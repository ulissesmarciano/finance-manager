import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { beforeEach, describe, expect, it } from 'vitest';
import { CardsHeaderActions } from './cards-header-actions';

describe('CardsHeaderActions', () => {
  let fixture: ComponentFixture<CardsHeaderActions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsHeaderActions],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsHeaderActions);
    fixture.detectChanges();
  });

  it('should render the configured action button', () => {
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;

    expect(button).toBeTruthy();
    expect(button.textContent).toContain('Adicionar transação');
  });
});
