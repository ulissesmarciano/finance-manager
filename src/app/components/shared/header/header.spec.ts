import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { Header } from './header';

@Component({ template: '' })
class HeaderRouteStub {}

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [
        provideRouter([
          {
            path: 'parent',
            children: [
              {
                path: 'child',
                component: HeaderRouteStub,
                data: {
                  header: {
                    title: 'Transações',
                    subtitle: 'Acompanhe seus lançamentos',
                  },
                },
              },
            ],
          },
        ]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update its content from the deepest active route', async () => {
    await TestBed.inject(Router).navigateByUrl('/parent/child');
    fixture.detectChanges();

    expect(component.content()).toEqual({
      title: 'Transações',
      subtitle: 'Acompanhe seus lançamentos',
    });
  });
});
