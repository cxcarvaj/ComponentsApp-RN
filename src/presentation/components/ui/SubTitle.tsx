import React from 'react';
import {Text} from 'react-native';
import {colors, globalStyles} from '../../../config/theme/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface SubTitleProps {
  text: string;
  isSafe?: boolean;
  backgroundColor?: string;
}

export const SubTitle = ({
  text,
  isSafe = false,
  backgroundColor = colors.background,
}: SubTitleProps) => {
  const {top} = useSafeAreaInsets();
  return (
    <Text
      style={{
        ...globalStyles.subTitle,
        marginTop: isSafe ? top : 0,
        marginBottom: 10,
        backgroundColor: backgroundColor,
      }}>
      {text}
    </Text>
  );
};
