import { Component, signal } from '@angular/core';
import { Page } from './components/shared/page/page';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Page],
})
export class App {
  protected readonly title = signal('finance-manager');
}
