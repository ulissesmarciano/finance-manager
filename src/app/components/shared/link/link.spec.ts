import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Link } from './link';
import { provideRouter } from '@angular/router';

describe('Link', () => {
  let component: Link;
  let fixture: ComponentFixture<Link>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Link],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Link);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should apply the selected variant classe secondary', () => {
    fixture.componentRef.setInput('linkType', 'secondary');
    fixture.detectChanges();

    const link = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;

    expect(link.classList.contains('bg-background-default')).toBe(true);
  });

  it('should apply the selected variant classe returns', () => {
    fixture.componentRef.setInput('linkType', 'primary');
    fixture.detectChanges();

    const link = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;

    expect(link.classList.contains('bg-primary')).toBe(true);
  });
});
