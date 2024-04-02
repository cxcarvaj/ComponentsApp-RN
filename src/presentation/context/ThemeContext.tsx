import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from 'react';
import {ThemeColors, darkColors, lightColors} from '../../config/theme/theme';
import {AppState, Appearance} from 'react-native';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';

type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;
  isDark: boolean;
  setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: PropsWithChildren) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');
  const isDark = currentTheme === 'dark';
  //   const colorScheme = useColorScheme();

  //   useEffect(() => {
  //     if (colorScheme === 'dark') {
  //       setCurrentTheme('dark');
  //     } else {
  //       setCurrentTheme('light');
  //     }
  //   }, [colorScheme]);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', _ => {
      const colorScheme = Appearance.getColorScheme();
      setCurrentTheme(colorScheme === 'dark' ? 'dark' : 'light');
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme);
  };

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <ThemeContext.Provider
        value={{
          currentTheme,
          colors: currentTheme === 'light' ? lightColors : darkColors,
          isDark: isDark,
          setTheme: setTheme,
        }}>
        {children}
      </ThemeContext.Provider>
    </NavigationContainer>
  );
};
