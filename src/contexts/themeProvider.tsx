import * as React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { lightTheme, darkTheme, GlobalStyles } from '../themes';
import { useDarkMode } from '../hooks/useDarkMode';

type themeType = string;

interface ContextProps {
  children: React.ReactNode;
  toggleTheme: () => void;
  theme: themeType;
}

const ThemeContext = React.createContext<any>({});

export const useTheme = () => React.useContext<ContextProps>(ThemeContext);

const ThemeProvider: React.FC<Pick<ContextProps, 'children'>> = ({
  children,
}) => {
  const [mode, toggleMode] = useDarkMode();

  const toggleTheme = () => {
    toggleMode();
  };

  const computedTheme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme: mode, toggleTheme }}>
      <StyledThemeProvider theme={computedTheme}>
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
