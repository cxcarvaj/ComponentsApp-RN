import React, {useContext} from 'react';
import {Text, View} from 'react-native';

import {Button, CustomView, Title} from '../../components';
import {ThemeContext} from '../../context/ThemeContext';

export const ChangeThemeScreen = () => {
  const {currentTheme, colors, setTheme} = useContext(ThemeContext);

  return (
    <CustomView hasMargin>
      <Title text={`Change Theme: ${currentTheme}`} isSafe />

      <Button text="Light" onPress={() => setTheme('light')} />

      <View style={{height: 10}} />

      <Button text="Dark" onPress={() => setTheme('dark')} />

      <View style={{height: 10}} />

      <Text style={{color: colors.text}}>
        {JSON.stringify(colors, null, 2)}
      </Text>
    </CustomView>
  );
};
