import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  isModalOpen = false;

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
