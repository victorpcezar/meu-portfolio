import { createContext, useContext } from 'react'

export const STORAGE_KEY = 'theme'

export const ThemeModeContext = createContext({ mode: 'light', toggle: () => {} })

export const useThemeMode = () => useContext(ThemeModeContext)
