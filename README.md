# Portfólio — Victor Emanuel Pires Cezar

Site pessoal com apresentação, stacks, projetos, experiência e formação.

**Site no ar:** https://meu-portfolio-ruddy-seven.vercel.app

## Recursos

- Tema claro e escuro: segue o tema do sistema na primeira visita e guarda a escolha do botão da barra de navegação
- Layout responsivo e navegação por seções
- Animações com respeito à preferência "reduzir movimento"
- Botão para baixar o currículo em PDF

## Tecnologias

Next.js 16 (App Router), React 19, TypeScript, Styled Components, Framer Motion e React Icons.

## Como rodar

Requer Node.js 20.19+ ou 22.13+.

```bash
npm install
npm run dev
```

Outros comandos: `npm run build` (gera a versão de produção), `npm run start` (serve essa versão) e `npm run lint`.

## Estrutura

```
src/
  app/          layout (providers, fonte, metadados) e página inicial
  components/   NavBar, Card, Footer, SocialLink, SectionTitle
  sections/     Hero, About, StacksSection, Projects, ProfessionalExp, Education
  theme/        temas claro/escuro, provider e registry do styled-components
  styles/       estilos globais
  data/         links e dados compartilhados (tipados)
  hooks/        hooks utilitários
  types/        extensão de tipos do styled-components
public/         favicon e currículo em PDF
```

## Notas da migração (Vite → Next.js)

- A pasta `pages/` virou `sections/`: em projetos Next.js, `src/pages` é reservada ao Pages Router e seria tratada como rotas.
- Os componentes que usam styled-components ou Framer Motion têm `'use client'`. `layout.tsx` e `page.tsx` continuam sendo Server Components.
- As cores do tema são variáveis CSS (`--color-*`) trocadas pelo atributo `data-theme` do `<html>`. Os estilos continuam usando `theme.colors.x`; isso evita piscar no tema errado e erros de hidratação no SSR.
