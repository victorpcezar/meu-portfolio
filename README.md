# Portfólio — Victor Emanuel Pires Cezar

Site pessoal com apresentação, stacks, projetos, experiência e formação.

**Site no ar:** https://meu-portfolio-ruddy-seven.vercel.app

## Recursos

- Tema claro e escuro: segue o tema do sistema na primeira visita e guarda a escolha do botão da barra de navegação
- Layout responsivo e navegação por seções
- Animações com respeito à preferência "reduzir movimento"
- Botão para baixar o currículo em PDF

## Tecnologias

React 19, Vite, Styled Components, Framer Motion e React Icons.

## Como rodar

```bash
npm install
npm run dev
```

Outros comandos: `npm run build` (gera a versão de produção) e `npm run lint`.

## Estrutura

```
src/
  components/   NavBar, Card, Footer, SocialLink, SectionTitle
  pages/        Hero, About, StacksSection, Projects, ProfessionalExp, Education
  theme/        temas claro/escuro e provider
  data/         links e dados compartilhados
public/         favicon e currículo em PDF
```

