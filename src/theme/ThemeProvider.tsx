'use client'

import { useMemo, useSyncExternalStore, type ReactNode } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { STORAGE_KEY, theme, type ThemeMode } from './themes'
import { ThemeModeContext } from './ThemeContext'

const DARK_QUERY = '(prefers-color-scheme: dark)'

// Escolha feita nesta visita quando o armazenamento está indisponível
let sessionMode: ThemeMode | null = null
const listeners = new Set<() => void>()

function readSaved(): ThemeMode | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved === 'light' || saved === 'dark' ? saved : null
  } catch {
    return null
  }
}

function getSnapshot(): ThemeMode {
  return sessionMode ?? readSaved() ?? (window.matchMedia?.(DARK_QUERY).matches ? 'dark' : 'light')
}

// O servidor não sabe a preferência da pessoa; o script do <head> já cuidou da aparência
function getServerSnapshot(): ThemeMode {
  return 'light'
}

// Reflete o tema no <html> (usado pelas variáveis CSS e pelo navegador para barras de rolagem e campos)
function applyMode(mode: ThemeMode) {
  document.documentElement.dataset.theme = mode
  document.documentElement.style.colorScheme = mode
}

function subscribe(onChange: () => void) {
  const query = window.matchMedia?.(DARK_QUERY)

  // Sem escolha salva, acompanha o tema do sistema (getSnapshot já resolve a prioridade)
  const handleChange = () => {
    applyMode(getSnapshot())
    onChange()
  }

  listeners.add(handleChange)
  query?.addEventListener('change', handleChange)
  window.addEventListener('storage', handleChange)
  applyMode(getSnapshot())

  return () => {
    listeners.delete(handleChange)
    query?.removeEventListener('change', handleChange)
    window.removeEventListener('storage', handleChange)
  }
}

function toggle() {
  const next: ThemeMode = getSnapshot() === 'dark' ? 'light' : 'dark'
  try {
    localStorage.setItem(STORAGE_KEY, next)
  } catch {
    sessionMode = next /* armazenamento indisponível: o tema vale só nesta visita */
  }
  listeners.forEach((listener) => listener())
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const mode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const value = useMemo(() => ({ mode, toggle }), [mode])

  return (
    <ThemeModeContext.Provider value={value}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeModeContext.Provider>
  )
}
