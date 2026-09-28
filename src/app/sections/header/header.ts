import { Component, inject, signal } from '@angular/core';
import { ThemeService } from '../../core/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly theme = inject(ThemeService);
  protected readonly menuOpen = signal(false);

  protected readonly links = [
    { href: '#projetos', label: 'Projetos' },
    { href: '#stack', label: 'Stack' },
    { href: '#trajetoria', label: 'Trajetória' },
    { href: '#contato', label: 'Contato' },
  ];
}
