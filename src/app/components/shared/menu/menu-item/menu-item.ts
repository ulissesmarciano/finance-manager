import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-menu-item',
  templateUrl: './menu-item.html',
})
export class MenuItem {
  label = input.required<string>();
  route = input.required<string>();
}
