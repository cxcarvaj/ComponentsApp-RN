import 'react-native-gesture-handler';
import React, {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './presentation/navigator/StackNavigator';
import {ThemeProvider} from './presentation/context/ThemeContext';

const AppState = ({children}: PropsWithChildren) => {
  return (
    <NavigationContainer>
      <ThemeProvider>{children}</ThemeProvider>
    </NavigationContainer>
  );
};

export const ComponentsApp = () => {
  return (
    <AppState>
      <StackNavigator />
    </AppState>
  );
};
