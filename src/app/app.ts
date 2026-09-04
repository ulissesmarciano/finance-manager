import { Component, signal } from '@angular/core';
import { Page } from './components/shared/page/page';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports: [Page],
})
export class App {
  protected readonly title = signal('finance-manager');
}
