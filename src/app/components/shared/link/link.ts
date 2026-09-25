import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

type LinkType = 'primary' | 'secondary';

@Component({
  imports: [MatIcon, RouterLink],
  selector: 'app-link',
  templateUrl: './link.html',
})
export class Link {
  @Input() label = '';
  @Input() route = '';
  @Input() icon = '';
  @Input() linkType: LinkType | null = null;

  inputClassType() {
    if (this.linkType === 'primary') {
      return 'inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-opacity hover:opacity-90';
    }
    if (this.linkType === 'secondary') {
      return 'inline-flex items-center gap-2 rounded-lg bg-background-default px-5 py-2.5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90 hover:bg-button-secondary-hover duration-300';
    }
    return;
  }
}
