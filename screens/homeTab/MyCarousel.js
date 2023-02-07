import { Text } from '@rneui/themed';
import { useRef } from 'react';
import { View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

function MyCarousel({ entries, sliderWidth, itemWidth }) {
  const renderItem = ({ item, index }) => (
    <View>
      <Text>{item.title}</Text>
    </View>
  );

  const carouselRef = useRef(null);

  return (
    <Carousel
      ref={carouselRef}
      data={entries}
      renderItem={renderItem}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
    />
  );
}

export default MyCarousel;
