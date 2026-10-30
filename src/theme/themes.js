const fonts = {
  code: "'JetBrains Mono', 'Fira Code', ui-monospace, SFMono-Regular, Menlo, monospace",
}

export const lightTheme = {
  mode: 'light',
  fonts,
  colors: {
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
  },
}

// No escuro o vinho (#7B1113) fica ilegível, então o destaque usa um tom mais claro da mesma família.
export const darkTheme = {
  mode: 'dark',
  fonts,
  colors: {
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
  },
}
