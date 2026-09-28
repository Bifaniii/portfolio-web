import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { PROJECTS } from './data/portfolio.data';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
  });

  it('mostra nome e cargo no topo', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;

    expect(el.querySelector('h1')?.textContent).toContain('Guilherme Bifani');
    expect(el.querySelector('.role')?.textContent).toContain('Backend Java');
  });

  it('renderiza um card por projeto, com link para o repositório', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;

    expect(el.querySelectorAll('.featured, .card').length).toBe(PROJECTS.length);
    for (const project of PROJECTS) {
      expect(el.querySelector(`a[href="${project.repo}"]`)).not.toBeNull();
    }
  });

  it('soma os testes de todos os projetos', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const total = PROJECTS.reduce((sum, p) => sum + (p.tests ?? 0), 0);

    expect((fixture.nativeElement as HTMLElement).querySelector('.lead')?.textContent).toContain(`${total} testes`);
  });
});
