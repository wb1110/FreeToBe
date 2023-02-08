import { View, Text, Linking } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Image } from '@rneui/themed';
import { INSTA_ACCESS } from '@env';
import Swiper from 'react-native-swiper';

export default function Instagram() {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(
        `https://graph.instagram.com/me/media?fields=media_url,permalink,timestamp,thumbnail_url,media_type&access_token=${INSTA_ACCESS}`
      )
      .then((res) => {
        setData(res.data.data.slice(0, 4));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Swiper
      style={{
        height: 300,
      }}
      activeDotColor="white"
      loop={false}
    >
      {data ? (
        data.map((item, index) => (
          <View
            key={index}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              aspectRatio: 1,
            }}
          >
            <Image
              source={{ uri: item.media_type === 'VIDEO' ? item.thumbnail_url : item.media_url }}
              style={{ width: '100%', aspectRatio: 1, flex: 1 }}
              onPress={() => Linking.openURL(item.permalink)}
            />
          </View>
        ))
      ) : (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            aspectRatio: 1,
          }}
        >
          <Text>Insta not working</Text>
        </View>
      )}
    </Swiper>
  );
}
