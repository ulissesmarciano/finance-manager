import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Page } from './page';

describe('Page', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Page);

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the sidebar', () => {
    const fixture = TestBed.createComponent(Page);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const sidebar = compiled.querySelector('aside');

    expect(sidebar).toBeTruthy();
  });

  it('should render the app menu', () => {
    const fixture = TestBed.createComponent(Page);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const menu = compiled.querySelector('app-menu');

    expect(menu).toBeTruthy();
  });

  it('should render the main content area', () => {
    const fixture = TestBed.createComponent(Page);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const main = compiled.querySelector('main');

    expect(main).toBeTruthy();
  });

  it('should contain a router outlet', () => {
    const fixture = TestBed.createComponent(Page);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const routerOutlet = compiled.querySelector('router-outlet');

    expect(routerOutlet).toBeTruthy();
  });
});
