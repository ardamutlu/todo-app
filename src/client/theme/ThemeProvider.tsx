import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from './theme';

export const ThemeProvider = ({ children }: any) => {
  const [defaultTheme, setDefaultTheme] = useState(theme);
  const isMobile = useSelector(({ app }: any) => app.isMobile);

  useEffect(() => {
    setDefaultTheme(Object.assign({}, theme, { isMobile: isMobile }));
  }, [isMobile]);

  return <StyledThemeProvider theme={defaultTheme}>{children}</StyledThemeProvider>;
};
