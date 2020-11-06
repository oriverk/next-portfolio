import { createContext } from 'react';

export const themeProps = () => {
  const theme = {
    theme: 'light',
    switchTheme: () => { },
  };
  return theme;
};

export const ThemeContext = createContext(themeProps());