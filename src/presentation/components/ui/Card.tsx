import React, {PropsWithChildren, useContext} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';

interface Props extends PropsWithChildren {
  styles?: StyleProp<ViewStyle>;
}

export const Card = ({styles, children}: Props) => {
  const {colors} = useContext(ThemeContext);

  return (
    <View
      style={[
        {
          backgroundColor: colors.cardBackground,
          borderRadius: 10,
          padding: 10,
        },
        styles,
      ]}>
      {children}
    </View>
  );
};
