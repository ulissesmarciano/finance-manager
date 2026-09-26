import { Component } from '@angular/core';
import { Menu } from "../menu/menu";
import { RouterOutlet } from "@angular/router";
import { Logo } from '../logo/logo';

@Component({
  imports: [Menu, RouterOutlet, Logo],
  selector: 'app-page',
  templateUrl: './page.html',
})
export class Page {}
