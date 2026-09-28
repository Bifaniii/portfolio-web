import { Component, computed, signal } from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';
import { buildWhatsappUrl } from './whatsapp';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly profile = PROFILE;
  protected readonly name = signal('');
  protected readonly message = signal('');
  protected readonly submitted = signal(false);
  protected readonly valid = computed(() => this.name().trim() !== '' && this.message().trim() !== '');

  protected send(event: Event): void {
    event.preventDefault();
    this.submitted.set(true);
    if (!this.valid()) {
      return;
    }
    window.open(buildWhatsappUrl(this.profile.whatsapp, this.name(), this.message()), '_blank', 'noopener');
  }
}
