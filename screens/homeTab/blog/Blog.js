import { Image } from '@rneui/themed';
import { useState } from 'react';
import { Linking, View } from 'react-native';
import Swiper from 'react-native-swiper';

export default function Blog() {
  const [data, setData] = useState();

  return (
    <Swiper
      style={{
        height: 300,
      }}
      activeDotColor="white"
      loop={false}
    >
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          aspectRatio: 1,
        }}
      >
        <Image
          source={require('../../../assets/images/blog1.jpeg')}
          style={{
            resizeMode: 'contain',
            height: 300,
            width: 300,
          }}
          onPress={() =>
            Linking.openURL(
              'https://www.freetobenourished.com/our-blog/weighttraininginthenewyear-gr74e'
            )
          }
        />
      </View>
    </Swiper>
  );
}
