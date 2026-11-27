import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-perfil-item',
  templateUrl: './perfil-item.html',
})
export class PerfilItem {
  label = input<string | null>(null);
  value = input<string | null>(null);
}
