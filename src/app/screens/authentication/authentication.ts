import { Component, signal } from '@angular/core';
import { Logo } from '../../components/shared/logo/logo';
import { TitlesComponent } from '../../components/shared/titles-component/titles-component';
import { Button } from '../../components/shared/button/button';
import { InputComponent } from '../../components/shared/input-component/input-component';
import { Link } from '../../components/shared/link/link';

type Auth = 'login' | 'register';

@Component({
  imports: [Logo, TitlesComponent, Button, InputComponent, Link],
  selector: 'app-authentication',
  templateUrl: './authentication.html',
})
export class Authentication {
  selectedAuthMode = signal<Auth>('login');

  selectAuthMode(auth: Auth) {
    this.selectedAuthMode.set(auth);
  }
}
