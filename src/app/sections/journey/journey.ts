import { Component } from '@angular/core';
import { JOURNEY } from '../../data/portfolio.data';

@Component({
  selector: 'app-journey',
  template: `
    <section id="trajetoria" class="section">
      <div class="container">
        <span class="eyebrow">// trajetória</span>
        <h2 class="section-title">Formação e experiência</h2>
        <ol class="timeline">
          @for (item of items; track item.title) {
            <li>
              <span class="when">{{ item.when }}</span>
              <div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </div>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: `
    .timeline {
      list-style: none;
      margin: 0;
      padding: 0;
      border-top: 1px solid var(--border);
    }

    li {
      display: grid;
      grid-template-columns: 140px 1fr;
      gap: 24px;
      padding: 24px 0;
      border-bottom: 1px solid var(--border);

      @media (max-width: 599px) {
        grid-template-columns: 1fr;
        gap: 6px;
      }
    }

    .when {
      font-family: var(--font-mono);
      font-size: 0.85rem;
      color: var(--muted);
      padding-top: 3px;
    }

    h3 {
      font-size: 1.2rem;
      margin-bottom: 6px;
    }

    p {
      color: var(--muted);
      max-width: 62ch;
    }
  `,
})
export class Journey {
  protected readonly items = JOURNEY;
}
