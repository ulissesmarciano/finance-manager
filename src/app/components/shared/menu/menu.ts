import { Component } from '@angular/core';
import { MenuItem } from "../menu-item/menu-item";

@Component({
  imports: [MenuItem],
  selector: 'app-menu',
  templateUrl: './menu.html',
})
export class Menu {}
