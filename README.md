# Portal Atlas

Portal Atlas é uma aplicação web em Next.js para uma experiência de jornalismo premium, com capa editorial, grade de notícias e seleção de reportagens especiais.

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Componentes baseados em Radix UI e shadcn/ui

## Como executar

Instale as dependências e inicie o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

A aplicação ficará disponível em `http://localhost:3000`.

## Scripts disponíveis

```bash
npm run dev      # inicia o ambiente de desenvolvimento
npm run build    # gera a versão de produção
npm run start    # executa a versão de produção
npm run lint     # executa o lint configurado no projeto
```

## Estrutura editorial

Os artigos exibidos na página inicial ficam centralizados em `lib/articles.ts`, facilitando a evolução para uma API ou CMS no futuro.
