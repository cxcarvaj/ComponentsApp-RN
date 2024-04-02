import React, {ReactNode} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';

interface Props {
  styles?: StyleProp<ViewStyle>;
  children?: ReactNode;
  hasMargin?: boolean;
}

export const CustomView = ({styles, children, hasMargin = false}: Props) => {
  return (
    <View
      style={[
        globalStyles.mainContainer,
        styles,
        hasMargin ? globalStyles.globalMargin : null,
      ]}>
      {children}
    </View>
  );
};
