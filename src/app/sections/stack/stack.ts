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

        <div class="setup">
          <div class="terminal" aria-hidden="true">
            <div class="bar"><i></i><i></i><i></i></div>
            <pre><span class="p">guilherme&#64;debian:~$</span> lsb_release -d
Description: Debian GNU/Linux 13 (trixie)
<span class="p">guilherme&#64;debian:~$</span> nvim .<span class="cursor"></span></pre>
          </div>
          <div class="setup-text">
            <h3>Onde eu programo</h3>
            <p>
              No Neovim, rodando no Debian 13. Configurei os dois do meu jeito e é onde me sinto mais à vontade para
              codar. E não, programar no terminal não me faz um dev das antigas: é preferência mesmo.
            </p>
          </div>
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

    .group h3 {
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

    .setup {
      margin-top: 40px;
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 32px;
      align-items: center;

      @media (max-width: 799px) {
        grid-template-columns: 1fr;
        gap: 20px;
      }
    }

    .terminal {
      background: #140e0c;
      border: 1px solid var(--border);
      border-radius: 12px;
      overflow: hidden;
      box-shadow: var(--shadow);

      .bar {
        display: flex;
        gap: 6px;
        padding: 10px 14px;
        border-bottom: 1px solid #2d201b;

        i {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #3e2d25;
        }
      }

      pre {
        margin: 0;
        padding: 16px 18px 18px;
        font-family: var(--font-mono);
        font-size: 0.8rem;
        line-height: 1.7;
        color: #f4e9dd;
        white-space: pre-wrap;
        overflow-wrap: anywhere;
      }

      .p {
        color: #d9a15f;
      }

      .cursor {
        display: inline-block;
        width: 8px;
        height: 1em;
        margin-left: 4px;
        vertical-align: -2px;
        background: #e26a55;
        animation: piscar 1.1s steps(2, start) infinite;
      }
    }

    .setup-text {
      h3 {
        font-size: 1.4rem;
        margin-bottom: 8px;
      }

      p {
        color: var(--muted);
        max-width: 48ch;
      }
    }

    @keyframes piscar {
      to {
        visibility: hidden;
      }
    }
  `,
})
export class Stack {
  protected readonly groups = STACK;
  protected readonly certifications = CERTIFICATIONS;
}
