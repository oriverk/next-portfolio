import { createContext } from 'react'

export type ThemeType = 'light' | 'dark'

type Theme = {
  theme: 'light' | 'dark'
  switchTheme: () => void
}

export const themeProps = () => {
  const theme: Theme = {
    theme: 'light',
    switchTheme: () => {}
  }
  return theme
}

export const ThemeContext = createContext<Theme>(themeProps())