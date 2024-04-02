import React, {PropsWithChildren} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {colors} from '../../../config/theme/theme';

interface Props extends PropsWithChildren {
  styles?: StyleProp<ViewStyle>;
}

export const Card = ({styles, children}: Props) => {
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
