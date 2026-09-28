import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { BOOKS, PATH, PROJECTS } from './data/portfolio.data';

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
    expect(el.querySelector('.hero img')?.getAttribute('src')).toBe('img/guilherme.webp');
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

  it('conta a trajetória e mostra os livros favoritos', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;

    expect(el.querySelectorAll('.path li').length).toBe(PATH.length);
    expect(el.querySelector('.path .current')?.textContent).toContain('Análise e Desenvolvimento de Sistemas');
    for (const book of BOOKS) {
      expect(el.querySelector('.shelf')?.textContent).toContain(book.title);
    }
  });
});
