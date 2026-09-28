import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<Theme>(this.initialTheme());

  toggle(): void {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('tema', next);
    } catch {
      // Sem storage (aba anônima, por exemplo) o tema só não é lembrado.
    }
  }

  private initialTheme(): Theme {
    const fixed = document.documentElement.getAttribute('data-theme');
    if (fixed === 'light' || fixed === 'dark') {
      return fixed;
    }
    return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
}
