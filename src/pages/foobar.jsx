import React, { useCallback } from 'react'
import { useTheme, ThemeProvider } from '../context/HogeContext'

const ChangeThemeButton = ({ children, theme }) => {
  const [currentTheme, setTheme] = useTheme()
  const changeTheme = useCallback(() => setTheme(theme), [theme, setTheme])
  return (
    <button
      className={theme === currentTheme ? 'active' : ''}
      onClick={changeTheme}
    >
      {children}
    </button>
  )
}

const Hoge = () => {
  const [theme] = useTheme()
  return (    
    <>
      <ThemeProvider>
        <article className={theme}>
          <div className="button">
            <ChangeThemeButton theme="dark">Dark theme</ChangeThemeButton>
            <ChangeThemeButton theme="light">Light theme</ChangeThemeButton>
          </div>
        </article>
        <style jsx>{`
          article {
            background-color: #000;
            color: #EEE;
          }
          article.active {
            background-color: #EEE;
            color: #000;
          }
        `}</style>
      </ThemeProvider>
    </>
  )
}

export default Hoge