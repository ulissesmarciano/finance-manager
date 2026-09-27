import { Component } from '@angular/core';
import { Menu } from "../menu/menu";
import { RouterOutlet } from "@angular/router";
import { Logo } from '../logo/logo';
import { Button } from '../button/button';
import { Link } from '../link/link';

@Component({
  imports: [Menu, RouterOutlet, Logo, Button, Link],
  selector: 'app-page',
  templateUrl: './page.html',
})
export class Page {}
