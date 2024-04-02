import React, {useContext, useRef, useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleProp,
  Text,
  TextStyle,
  View,
  useWindowDimensions,
} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';
import {FlatList} from 'react-native-gesture-handler';
import {ViewStyle} from 'react-native';
import {Button, CustomView} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../../context/ThemeContext';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../../assets/slide-3.png'),
  },
];

export const SlidesScreen = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const navigation = useNavigation();
  const {colors} = useContext(ThemeContext);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {contentOffset, layoutMeasurement} = event.nativeEvent;
    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

    setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);
  };

  const scrollToSlide = (index: number) => {
    if (!flatListRef.current) {
      return;
    }
    flatListRef.current.scrollToIndex({index, animated: true});
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <FlatList
        ref={flatListRef}
        data={items}
        keyExtractor={item => item.title}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        onScroll={onScroll}
      />

      {currentSlideIndex === items.length - 1 ? (
        <Button
          styles={{position: 'absolute', bottom: 60, right: 60, width: 100}}
          text="Finish"
          onPress={() => {
            navigation.goBack();
          }}
        />
      ) : (
        <Button
          styles={{position: 'absolute', bottom: 60, right: 60, width: 100}}
          text="Next"
          onPress={() => {
            scrollToSlide(currentSlideIndex + 1);
          }}
        />
      )}
    </View>
  );
};

interface SlideItemProps {
  item: Slide;
}

const SlideItem = ({item}: SlideItemProps) => {
  const {width} = useWindowDimensions();
  const {title, desc, img} = item;
  const {colors} = useContext(ThemeContext);

  const viewStyles: StyleProp<ViewStyle> = {
    flex: 1,
    backgroundColor: colors.cardBackground,
    borderRadius: 5,
    padding: 40,
    justifyContent: 'center',
    width: width,
  };

  const imgStyle: StyleProp<ImageStyle> = {
    width: width * 0.7,
    height: width * 0.7,
    resizeMode: 'center',
    alignSelf: 'center',
  };

  const titleStyles: StyleProp<TextStyle> = [
    globalStyles.title,
    {color: colors.primary, marginTop: 20},
  ];

  const descStyles: StyleProp<TextStyle> = [
    {color: colors.text, marginTop: 20},
  ];

  return (
    <CustomView styles={viewStyles}>
      <Image source={img} style={imgStyle} />
      <Text style={titleStyles}>{title}</Text>
      <Text style={descStyles}>{desc}</Text>
    </CustomView>
  );
};
