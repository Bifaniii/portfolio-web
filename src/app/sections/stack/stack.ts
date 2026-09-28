import { Component } from '@angular/core';
import { CERTIFICATIONS, STACK } from '../../data/portfolio.data';

@Component({
  selector: 'app-stack',
  template: `
    <section id="stack" class="section">
      <div class="container">
        <span class="eyebrow">03 · stack</span>
        <h2 class="section-title">Com o que eu <em>trabalho</em></h2>
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
        <div class="certs">
          <span>Certificações</span>
          <ul>
            @for (cert of certifications; track cert) {
              <li>{{ cert }}</li>
            }
          </ul>
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

    .certs {
      margin-top: 28px;
      display: flex;
      flex-wrap: wrap;
      gap: 8px 24px;
      align-items: baseline;

      span {
        font-family: var(--font-mono);
        font-size: 0.78rem;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--warm);
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        gap: 6px 24px;
      }
    }
  `,
})
export class Stack {
  protected readonly groups = STACK;
  protected readonly certifications = CERTIFICATIONS;
}
