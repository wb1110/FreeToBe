import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Image } from '@rneui/themed';
import { INSTA_ACCESS } from '@env';

export default function Instagram() {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(
        `https://graph.instagram.com/me/media?fields=media_url,caption,permalink,timestamp,thumbnail_url&access_token=${INSTA_ACCESS}`
      )
      .then((res) => {
        setData(res.data.data.slice(0, 4));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View>
      {data
        ? data.map((item, index) => (
            <View key={index}>
              <Image
                source={{ uri: item.thumbnail_url }}
                style={{ width: '100%', aspectRatio: 1, flex: 1 }}
              />
            </View>
          ))
        : null}
    </View>
  );
}
