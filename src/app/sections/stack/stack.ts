import { Component } from '@angular/core';
import { STACK } from '../../data/portfolio.data';

@Component({
  selector: 'app-stack',
  template: `
    <section id="stack" class="section">
      <div class="container">
        <span class="eyebrow">// stack</span>
        <h2 class="section-title">Com o que eu trabalho</h2>
        <div class="groups">
          @for (group of groups; track group.title) {
            <div class="group">
              <h3>{{ group.title }}</h3>
              <ul>
                @for (item of group.items; track item) {
                  <li>{{ item }}</li>
                }
              </ul>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .groups {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
      gap: 1px;
      background: var(--border);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      overflow: hidden;
    }

    .group {
      background: var(--surface);
      padding: 24px;
    }

    h3 {
      font-family: var(--font-mono);
      font-size: 0.8rem;
      font-weight: 500;
      color: var(--accent);
      letter-spacing: 0.02em;
      margin-bottom: 14px;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      gap: 6px;
    }
  `,
})
export class Stack {
  protected readonly groups = STACK;
}
