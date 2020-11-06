import { useEffect, useState, createContext, useContext, useCallback } from 'react'

const getMql = () =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')

const getBrowserTheme = () => {
  const mql = getMql()
  return mql && mql.matches ? 'dark' : 'light'
}

const onBrowserThemeChanged = callback => {
  const mql = getMql()
  const mqlListener = e => callback(e.matches ? 'dark' : 'light')
  mql && mql.addListener(mqlListener)
  return () => mql && mql.removeListener(mqlListener)
}

const getLocalStorageTheme = () => {
  try {
    const localTheme = localStorage && localStorage.getItem('theme')
    if (localTheme && ['light', 'dark'].includes(localTheme)) {
      return localTheme
    }
  } catch (err) {
    console.warn('Can’t access local storage:', err.message)
  }
}

const setLocalStorageTheme = theme => {
  try {
    localStorage && localStorage.setItem('theme', theme)
  } catch (err) {
    console.warn('Can’t write to local storage:', err.message)
  }
}

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null)

  const updateTheme = useCallback(
    newTheme => {
      if (typeof newTheme === 'function') {
        setTheme(currentTheme => {
          const actualNewTheme = newTheme(currentTheme)
          setLocalStorageTheme(actualNewTheme)
          return actualNewTheme
        })
      } else {
        setLocalStorageTheme(newTheme)
        setTheme(newTheme)
      }
    },
    [setTheme]
  )

  useEffect(() => {
    if (theme === null) {
      setTheme(getLocalStorageTheme() || getBrowserTheme())
    }
    return onBrowserThemeChanged(updateTheme)
  }, [theme, updateTheme])

  return (
    theme && (
      <ThemeContext.Provider value={[theme, updateTheme]}>
        {children}
      </ThemeContext.Provider>
    )
  )
}

export const useTheme = () => useContext(ThemeContext)
