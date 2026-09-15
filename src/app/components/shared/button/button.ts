import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

type ButtonVariant = 'primary' | 'secondary' | 'third';
type Label = string | null;
type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  imports: [MatIconModule],
  selector: 'app-button',
  templateUrl: './button.html',
})
export class Button {
  variant = input<ButtonVariant>('primary');
  icon = input<string | null>(null);
  label = input<Label>(null);
  size = input<'sm' | 'md' | 'lg'>('md');

  variantClasses(): string {
    const variants: Record<ButtonVariant, string> = {
      primary:
        'bg-button-primary text-primary-foreground py-3-sm font-semibold px-4 leading-none hover:translate-y-up-1 transform transition-transform duration-300',
      secondary:
        'bg-button-secondary text-muted-foreground py-3-sm font-semibold px-4 leading-none hover:bg-button-secondary-hover transform transition-transform duration-300',
      third:
        'bg-button-third text-muted-foreground py-3-sm font-semibold px-4 leading-none hover:text-foreground transform transition-transform duration-300',
    };

    return variants[this.variant()];
  }

  sizeClasses(): string {
    const sizes: Record<ButtonSize, string> = {
      sm: 'text-12',
      md: 'text-14',
      lg: 'text-16',
    };

    return sizes[this.size()];
  }
}
