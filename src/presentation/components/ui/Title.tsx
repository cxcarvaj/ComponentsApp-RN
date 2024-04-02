import React from 'react';
import {Text} from 'react-native';
import {colors, globalStyles} from '../../../config/theme/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  text: string;
  isSafe?: boolean;
  isWhite?: boolean;
}

export const Title = ({text, isSafe, isWhite}: Props) => {
  const {top} = useSafeAreaInsets();
  return (
    <Text
      style={{
        ...globalStyles.title,
        marginTop: isSafe ? top : 0,
        marginBottom: 10,
        color: isWhite ? 'white' : colors.text,
      }}>
      {text}
    </Text>
  );
};
