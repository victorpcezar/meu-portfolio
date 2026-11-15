'use client'

import { createGlobalStyle } from 'styled-components'
import { cssVarName, darkColors, lightColors, type ThemeColors } from '../theme/themes'

const toCssVariables = (colors: ThemeColors) =>
  Object.entries(colors)
    .map(([token, value]) => `${cssVarName(token)}: ${value};`)
    .join('\n    ')

export const GlobalStyles = createGlobalStyle`
  :root,
  :root[data-theme='light'] {
    color-scheme: light;
    ${toCssVariables(lightColors)}
  }

  :root[data-theme='dark'] {
    color-scheme: dark;
    ${toCssVariables(darkColors)}
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    background-color: ${({ theme }) => theme.colors.background};
  }

  body {
    font-family: ${({ theme }) => theme.fonts.code};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    transition: background-color 0.25s ease, color 0.25s ease;
  }

  section[id] {
    scroll-margin-top: 72px;
  }

  img {
    max-width: 100%;
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.primarySoft};
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 3px;
    border-radius: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
`
