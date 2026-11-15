export type ThemeMode = 'light' | 'dark'

export const STORAGE_KEY = 'theme'

export interface ThemeColors {
  background: string
  surface: string
  navBg: string
  border: string
  primary: string
  primarySoft: string
  primaryGlow: string
  onPrimary: string
  textPrimary: string
  textSecondary: string
  textMuted: string
  shadow: string
}

export interface AppTheme {
  fonts: { code: string }
  colors: ThemeColors
}

export const lightColors: ThemeColors = {
  background: '#FAFAFA',
  surface: '#FFFFFF',
  navBg: 'rgba(250, 250, 250, 0.88)',
  border: '#E0E0E0',
  primary: '#7B1113',
  primarySoft: 'rgba(123, 17, 19, 0.08)',
  primaryGlow: 'rgba(123, 17, 19, 0.18)',
  onPrimary: '#FFFFFF',
  textPrimary: '#111111',
  textSecondary: '#444444',
  textMuted: '#666666',
  shadow: 'rgba(0, 0, 0, 0.04)',
}

// No escuro o vinho (#7B1113) fica ilegível, então o destaque usa um tom mais claro da mesma família.
export const darkColors: ThemeColors = {
  background: '#0E1014',
  surface: '#171A21',
  navBg: 'rgba(14, 16, 20, 0.88)',
  border: '#2A2F3A',
  primary: '#E5656A',
  primarySoft: 'rgba(229, 101, 106, 0.14)',
  primaryGlow: 'rgba(229, 101, 106, 0.25)',
  onPrimary: '#0E1014',
  textPrimary: '#F2F3F5',
  textSecondary: '#B8BEC9',
  textMuted: '#8D95A3',
  shadow: 'rgba(0, 0, 0, 0.35)',
}

export const cssVarName = (token: string) =>
  `--color-${token.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}`

const colorKeys = Object.keys(lightColors) as (keyof ThemeColors)[]

// Os componentes continuam usando theme.colors.x, mas cada cor agora aponta para uma variável CSS.
// Assim o servidor gera o mesmo HTML nos dois temas e a troca acontece só pelo atributo data-theme,
// sem piscar e sem erro de hidratação.
const colorVars = colorKeys.reduce(
  (acc, key) => ({ ...acc, [key]: `var(${cssVarName(key)})` }),
  {} as ThemeColors,
)

export const theme: AppTheme = {
  fonts: {
    code: "var(--font-jetbrains-mono), 'JetBrains Mono', 'Fira Code', ui-monospace, SFMono-Regular, Menlo, monospace",
  },
  colors: colorVars,
}
