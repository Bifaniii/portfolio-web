# Portfólio

![CI](https://github.com/Bifaniii/portfolio-web/actions/workflows/ci.yml/badge.svg)

Meu site pessoal, no ar em [portfolio-web-phi-ecru.vercel.app](https://portfolio-web-phi-ecru.vercel.app). Mostra meus projetos de backend em Java, a stack que uso e um formulário que abre uma conversa no WhatsApp.

A primeira versão era em HTML, CSS e JavaScript puro, de quando comecei a programar. Esta é em Angular 22 com TypeScript: componentes standalone, signals e sem zone.js. Tem tema claro e escuro, que segue o sistema até você escolher um.

## Como rodar

```bash
npm install
npm start        # http://localhost:4200
npm test         # testes com Vitest
npm run build    # gera dist/portfolio-web/browser
```

## Onde mexer

Todo o conteúdo (projetos, stack, trajetória e contatos) fica em `src/app/data/portfolio.data.ts`. Para incluir um projeto, basta acrescentar um item no array `PROJECTS`; o card e a contagem de testes se ajustam sozinhos.

As seções ficam em `src/app/sections/`, uma pasta por seção. As cores dos dois temas são variáveis CSS no topo de `src/styles.scss`.

## Deploy

A Vercel faz o build a cada push na `main`, seguindo o `vercel.json`. O GitHub Actions roda os testes e o build no mesmo push.
