import React, {useState} from 'react';
import {Button, CustomView, Title} from '../../components';
import {Modal, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {bottom} = useSafeAreaInsets();
  return (
    <CustomView hasMargin>
      <Title text="Modal Screen" isSafe />

      <Button text="Open Modal" onPress={() => setIsVisible(true)} />

      <Modal visible={isVisible} animationType="slide">
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.1)'}}>
          <View style={{paddingHorizontal: 10}}>
            <Title text="Modal Content" isSafe />
          </View>

          <View style={{flex: 1}} />

          <Button
            text="Close Modal"
            onPress={() => setIsVisible(false)}
            styles={{height: bottom + 40}}
          />
        </View>
      </Modal>
    </CustomView>
  );
};
