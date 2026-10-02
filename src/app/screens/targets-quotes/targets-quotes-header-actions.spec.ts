import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { beforeEach, describe, expect, it } from 'vitest';
import { TargetQuotesHeaderActions } from './targets-quotes-header-actions';

describe('TargetQuotesHeaderActions', () => {
  let fixture: ComponentFixture<TargetQuotesHeaderActions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetQuotesHeaderActions],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TargetQuotesHeaderActions);
    fixture.detectChanges();
  });

  it('should render the configured action button', () => {
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;

    expect(button).toBeTruthy();
    expect(button.textContent).toContain('Adicionar transação');
  });
});
