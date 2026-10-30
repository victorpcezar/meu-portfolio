import { useCallback, useEffect, useMemo, useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './themes'
import { STORAGE_KEY, ThemeModeContext } from './ThemeContext'

function readSaved() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved === 'light' || saved === 'dark' ? saved : null
  } catch {
    return null
  }
}

function getInitialMode() {
  return readSaved() ?? (window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
}

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(getInitialMode)

  // Reflete o tema no <html> (usado pelo navegador para barras de rolagem e campos)
  useEffect(() => {
    document.documentElement.dataset.theme = mode
    document.documentElement.style.colorScheme = mode
    document.documentElement.style.backgroundColor = mode === 'dark' ? darkTheme.colors.background : lightTheme.colors.background
  }, [mode])

  // Sem escolha salva, acompanha o tema do sistema
  useEffect(() => {
    const query = window.matchMedia?.('(prefers-color-scheme: dark)')
    if (!query) return undefined
    const onChange = (event) => {
      if (!readSaved()) setMode(event.matches ? 'dark' : 'light')
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  const toggle = useCallback(() => {
    setMode((previous) => {
      const next = previous === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        /* armazenamento indisponível: o tema vale só nesta visita */
      }
      return next
    })
  }, [])

  const value = useMemo(() => ({ mode, toggle }), [mode, toggle])

  return (
    <ThemeModeContext.Provider value={value}>
      <StyledThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>{children}</StyledThemeProvider>
    </ThemeModeContext.Provider>
  )
}
