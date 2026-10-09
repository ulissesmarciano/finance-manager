import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

type ButtonVariant =
  'primary' | 'secondary' | 'third' | 'outlined-secondary' | 'only-icon-secondary';
type Label = string | null;
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  imports: [MatIconModule, RouterLink, RouterLinkActive],
  selector: 'app-button',
  templateUrl: './button.html',
})
export class Button {
  clicked = output<void>();
  variant = input<ButtonVariant>('primary');
  activeVariant = input<ButtonVariant | null>(null);
  contentAlign = input<'start' | 'center'>('center');
  icon = input<string | null>(null);
  label = input<Label>(null);
  size = input<ButtonSize>('md');
  route = input<string>();
  type = input<ButtonType>('button');
  disabled = input<boolean>(false);

  variantClasses(variant: ButtonVariant = this.variant()): string {
    const variants: Record<ButtonVariant, string> = {
      primary:
        'bg-button-primary text-primary-foreground py-3-sm font-semibold px-4 hover:translate-y-up-1',
      secondary:
        'bg-button-secondary text-muted-foreground py-3-sm font-semibold px-4 hover:bg-button-secondary-hover',
      third:
        'bg-button-third text-muted-foreground py-3-sm font-semibold px-4 hover:text-foreground',
      'outlined-secondary':
        'bg-button-secondary text-muted-foreground py-3-sm font-semibold px-4 hover:bg-primary-soft hover:text-foreground border-none',
      'only-icon-secondary':
        'bg-button-secondary text-muted-foreground py-3-sm font-semibold px-3-sm hover:bg-button-secondary-hover',
    };

    return variants[variant];
  }

  sizeClasses(): string {
    const sizes: Record<ButtonSize, string> = {
      sm: 'text-12',
      md: 'text-14',
      lg: 'text-16',
    };

    return sizes[this.size()];
  }

  iconSizeClasses(): string {
    const sizes: Record<ButtonSize, string> = {
      sm: 'size-4! text-14!',
      md: 'size-5-sm! text-18!',
      lg: 'size-6! text-20!',
    };

    return sizes[this.size()];
  }
}
