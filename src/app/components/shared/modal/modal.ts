import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Button } from '../button/button';

@Component({
  imports: [MatIconModule, Button],
  selector: 'app-modal',
  templateUrl: './modal.html',
})
export class Modal {
  isOpen = input(false);
  closed = output<void>();

  handleOverlayKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closed.emit();
    }
  }

  handleContentKeydown(event: KeyboardEvent): void {
    event.stopPropagation();

    if (event.key === 'Escape') {
      this.closed.emit();
    }
  }
}
