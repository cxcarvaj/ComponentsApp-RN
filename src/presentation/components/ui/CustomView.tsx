import React, {ReactNode, useContext} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  styles?: StyleProp<ViewStyle>;
  children?: ReactNode;
  hasMargin?: boolean;
}

export const CustomView = ({styles, children, hasMargin = false}: Props) => {
  const {colors} = useContext(ThemeContext);
  return (
    <View
      style={[
        globalStyles.mainContainer,
        styles,
        hasMargin ? globalStyles.globalMargin : null,
        {backgroundColor: colors.background},
      ]}>
      {children}
    </View>
  );
};
