import React, {useRef} from 'react';
import {Animated, StyleSheet, PanResponder} from 'react-native';
import {CustomView} from '../../components';

export const Animation102Screen = () => {
  const figure = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: figure.x,
          dy: figure.y,
        },
      ],
      {useNativeDriver: false},
    ),
    onPanResponderRelease: () => {
      Animated.spring(figure, {
        toValue: {x: 0, y: 0},
        useNativeDriver: false,
      }).start();
    },
  });
  return (
    <CustomView styles={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[figure.getLayout(), styles.box]}
      />
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#61dafb',
    width: 80,
    height: 80,
    borderRadius: 4,
  },
});
