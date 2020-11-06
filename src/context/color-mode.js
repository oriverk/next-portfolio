import { useEffect, useState, createContext, useContext } from 'react'

const colorModes = {
  light: 'Light',
  natural: 'Natural',
  dark: 'dark'
}

const ColorContext = createContext({
  color: '',
  setColor: () => {}
})

const ColorProvider = ({ children }) => {
  // let localTheme
  // if (typeof localStorage !== undefined) {
  //   localTheme = window.localStorage.getItem('theme') === 'dark'
  // } else {
  //   localTheme = 'light'
  // }

  const [color, setColor] = useState('dark')

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  )
}

const useColorContext = () => useContext(ColorContext)

export { ColorProvider, useColorContext, colorModes }