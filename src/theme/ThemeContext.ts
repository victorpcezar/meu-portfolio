'use client'

import { createContext, useContext } from 'react'
import type { ThemeMode } from './themes'

export interface ThemeModeValue {
  mode: ThemeMode
  toggle: () => void
}

export const ThemeModeContext = createContext<ThemeModeValue>({ mode: 'light', toggle: () => {} })

export const useThemeMode = () => useContext(ThemeModeContext)
