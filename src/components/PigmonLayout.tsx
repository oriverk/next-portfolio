import { useState, createContext } from 'react'
import css from 'styled-jsx/css'
import { ThemeContext, ThemeType } from '../context/ThemeContext'
import { LIGHT_MODE, DARK_MODE } from '../styles/Theme'

export const PigmonLayout: React.FC  = props => {
  let localTheme: ThemeType
  if (typeof localStorage !== 'undefined') {
    localTheme = window.localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
  } else {
    localTheme = 'light';
  }
  const [theme, setTheme] = useState(localTheme)

  const switchToggleThemeClick = () => {
    if (theme === 'dark') {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    } else {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  return (
    <ThemeContext.Provider value={{ theme: theme, switchTheme: switchToggleThemeClick }}>
      <style jsx global>{GlobalStyle}</style>
      {props.children}
    </ThemeContext.Provider>
  )
}

const GlobalStyle = css`
   * {
    box-sizing: border-box;
  }

  html {
    overflow-y: scroll;
  }

  body {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Lato';
    line-height: 1.8;
    word-wrap: break-word;
    font-kerning: normal;
  }
  body {
    color: ${ (props) => (props.theme === 'light' ? LIGHT_MODE.text : DARK_MODE.text)};
    background-color: ${ (props) => ( props.theme === 'light' ? LIGHT_MODE.background : DARK_MODE.background)};
  }

  h1, h2, h3, h4, h5, p {
      color: ${(props) => (props.theme === 'light' ? LIGHT_MODE.text : DARK_MODE.text)};
  }
  a {
    color: ${(props) => (props.theme === 'light' ? LIGHT_MODE.text : DARK_MODE.text )};
  }
  a:hover {
    background-color: ${(props) => ( props.theme === 'light' ? LIGHT_MODE.hover : DARK_MODE.hover )};
  }
`



