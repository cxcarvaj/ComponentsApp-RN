import React, {useContext} from 'react';
import {Alert, View} from 'react-native';

import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {globalStyles} from '../../../config/theme/theme';
import {Button} from '../../components/ui/Button';
import {showPrompt} from '../../../config/adapters/prompt.adapter';
import {ThemeContext} from '../../context/ThemeContext';

export const AlertScreen = () => {
  const {isDark} = useContext(ThemeContext);

  const createTwoButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {userInterfaceStyle: isDark ? 'dark' : 'light'},
    );

  const createThreeButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
      ],
      {userInterfaceStyle: isDark ? 'dark' : 'light'},
    );

  const onShowPrompt = () => {
    showPrompt({
      title: 'What is your email?',
      subtitle: 'Proident aliquip consectetur nostrud enim deserunt.',
      promptType: 'plain-text',
      placeholder: 'This is the default value',
      defaultValue: 'number-pad',
      buttons: [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ],
    });

    // ! Native code, not working in Android
    // Alert.prompt(
    //   'What is your email?',
    //   'Proident aliquip consectetur nostrud enim deserunt.',
    //   (value: string) => console.log(value),
    //   'secure-text',
    //   'This is the default value',
    //   'number-pad',
    // );
  };

  return (
    <CustomView styles={globalStyles.globalMargin}>
      <Title isSafe text="Alerts" />

      <Button text="Alert with 2 buttons" onPress={createTwoButtonAlert} />
      <View style={{height: 10}} />

      <Button text="Alert with 3 buttons" onPress={createThreeButtonAlert} />

      <View style={{height: 10}} />

      <Button text="Prompt - Input" onPress={onShowPrompt} />
    </CustomView>
  );
};
