import { NgComponentOutlet } from '@angular/common';
import { Component, inject, signal, Type } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { TitlesComponent } from '../titles-component/titles-component';
import { Avatar } from '../avatar/avatar';
import { Button } from '../button/button';
import { InputComponent } from '../input-component/input-component';

interface HeaderContent {
  title: string;
  subtitle: string;
  actions?: Type<unknown>;
}

const defaultHeader: HeaderContent = {
  title: 'Boa noite, Ulisses',
  subtitle: 'Este é o seu panorama financeiro de agosto de 2026',
};

@Component({
  imports: [TitlesComponent, Avatar, Button, InputComponent, NgComponentOutlet],
  selector: 'app-header',
  templateUrl: './header.html',
})
export class Header {
  content = signal<HeaderContent>(defaultHeader);
  private router = inject(Router);

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.updateContent());

    this.updateContent();
  }

  private updateContent(): void {
    let route = this.router.routerState.snapshot.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const routeHeader = route.data['header'] as Partial<HeaderContent> | undefined;
    this.content.set({ ...defaultHeader, ...routeHeader });
  }
}
