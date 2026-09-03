import { Component } from '@angular/core';
import { Menu } from "../menu/menu";
import { RouterOutlet } from "@angular/router";

@Component({
  imports: [Menu, RouterOutlet],
  selector: 'app-page',
  templateUrl: './page.html',
})
export class Page {}
