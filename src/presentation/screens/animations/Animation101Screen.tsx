import React, {useContext} from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';
import {useAnimation} from '../../hooks/useAnimation';
import {ThemeContext} from '../../context/ThemeContext';
import {Button, CustomView} from '../../components';

export const Animation101Screen = () => {
  const marginTop = 10;
  const {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  } = useAnimation();

  const {colors} = useContext(ThemeContext);

  return (
    <CustomView styles={styles.container}>
      <Animated.View
        style={[
          styles.purpleBox,
          {
            backgroundColor: colors.primary,
            opacity: animatedOpacity,
            transform: [{translateY: animatedTop}],
          },
        ]}
      />

      <Button
        text="Fade In"
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({
            initialPosition: -100,
            easing: Easing.elastic(1),
            duration: 750,
          });
        }}
        styles={{marginTop: marginTop}}
      />

      <Button
        onPress={() => fadeOut({})}
        text="Fade Out"
        styles={{marginTop: marginTop}}
      />
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  purpleBox: {
    width: 150,
    height: 150,
  },
});
