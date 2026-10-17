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

  it.each([
    { size: 'sm', expectedClass: 'text-12' },
    { size: 'md', expectedClass: 'text-14' },
    { size: 'lg', expectedClass: 'text-16' },
    { size: 'xlg', expectedClass: 'text-18' },
  ])('should apply the selected size class $size', ({ size, expectedClass }) => {
    fixture.componentRef.setInput('size', size);
    fixture.detectChanges();

    const link = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;

    expect(link.classList.contains(expectedClass)).toBe(true);
  });

  it.each([
    { linkType: 'primary', expectedClass: 'bg-primary' },
    { linkType: 'secondary', expectedClass: 'bg-background-default' },
    { linkType: 'outlined-secondary', expectedClass: 'bg-background-default' },
    { linkType: 'primary-inverted', expectedClass: 'bg-background-default' },
  ])('should apply the selected variant class $linkType', ({ linkType, expectedClass }) => {
    fixture.componentRef.setInput('linkType', linkType);
    fixture.detectChanges();

    const link = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;

    expect(link.classList.contains(expectedClass)).toBe(true);
  });

  it('should return undefined for an unsupported size', () => {
    fixture.componentRef.setInput('size', 'unsupported');

    expect(component.linkSize()).toBeUndefined();
  });
});
