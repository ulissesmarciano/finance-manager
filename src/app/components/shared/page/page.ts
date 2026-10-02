import { Component } from '@angular/core';
import { Menu } from "../menu/menu";
import { RouterOutlet } from "@angular/router";
import { Logo } from '../logo/logo';
import { Button } from '../button/button';
import { Link } from '../link/link';
import { Header } from '../header/header';

@Component({
  imports: [Menu, RouterOutlet, Logo, Button, Link, Header],
  selector: 'app-page',
  templateUrl: './page.html',
})
export class Page {}
