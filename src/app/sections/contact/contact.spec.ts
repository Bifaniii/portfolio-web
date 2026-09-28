import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { Contact } from './contact';
import { buildWhatsappUrl } from './whatsapp';

describe('buildWhatsappUrl', () => {
  it('monta a mensagem com o nome e codifica para URL', () => {
    const url = buildWhatsappUrl('5511900000000', '  Ana ', 'Vi seu portfólio & gostei!');

    expect(url.startsWith('https://wa.me/5511900000000?text=')).toBe(true);
    expect(decodeURIComponent(url.split('text=')[1])).toBe('Olá, me chamo Ana. Vi seu portfólio & gostei!');
  });
});

describe('Contact', () => {
  afterEach(() => vi.restoreAllMocks());

  async function render() {
    await TestBed.configureTestingModule({ imports: [Contact] }).compileComponents();
    const fixture = TestBed.createComponent(Contact);
    await fixture.whenStable();
    return { fixture, el: fixture.nativeElement as HTMLElement };
  }

  it('não abre o WhatsApp e mostra erro com campos vazios', async () => {
    const open = vi.spyOn(window, 'open').mockReturnValue(null);
    const { fixture, el } = await render();

    el.querySelector('form')!.dispatchEvent(new Event('submit'));
    await fixture.whenStable();

    expect(open).not.toHaveBeenCalled();
    expect(el.querySelector('.error')?.textContent).toContain('Preencha');
  });

  it('abre o WhatsApp quando nome e mensagem estão preenchidos', async () => {
    const open = vi.spyOn(window, 'open').mockReturnValue(null);
    const { fixture, el } = await render();

    const input = el.querySelector('input')!;
    input.value = 'Ana';
    input.dispatchEvent(new Event('input'));
    const textarea = el.querySelector('textarea')!;
    textarea.value = 'Tenho uma vaga';
    textarea.dispatchEvent(new Event('input'));
    el.querySelector('form')!.dispatchEvent(new Event('submit'));
    await fixture.whenStable();

    expect(open).toHaveBeenCalledOnce();
    expect(open.mock.calls[0][0]).toContain('wa.me/');
  });
});
