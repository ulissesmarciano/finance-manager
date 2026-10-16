import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

type LinkType = 'primary' | 'secondary' | 'outlined-secondary' | 'primary-inverted';
type LinkSize = 'sm' | 'md' | 'lg' | 'xlg';

@Component({
  imports: [MatIcon, RouterLink],
  selector: 'app-link',
  templateUrl: './link.html',
})
export class Link {
  label = input<string>('');
  route = input<string>('');
  icon = input<string>('');
  linkType = input<LinkType | null>(null);
  size = input<LinkSize>('md');

  inputClassType() {
    if (this.linkType() === 'primary') {
      return 'inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-opacity hover:opacity-90';
    }
    if (this.linkType() === 'secondary') {
      return 'inline-flex items-center gap-2 rounded-lg bg-background-default px-5 py-2.5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90 hover:bg-button-secondary-hover duration-300';
    }

    if (this.linkType() === 'outlined-secondary') {
      return 'inline-flex items-center gap-2 rounded-lg bg-background-default px-5 py-2.5 text-sm text-muted-foreground hover:text-foreground duration-300 border-none';
    }
    if (this.linkType() === 'primary-inverted') {
      return 'inline-flex items-center gap-2 rounded-lg bg-background-default text-12 text-primary font-semibold hover:text-foreground duration-300 border-none';
    }
    return;
  }

  linkSize() {
    if (this.size() === 'sm') {
      return 'text-12';
    }
    if (this.size() === 'md') {
      return 'text-14';
    }
    if (this.size() === 'lg') {
      return 'text-16';
    }
    if (this.size() === 'xlg') {
      return 'text-18';
    }
    return;
  }
}
