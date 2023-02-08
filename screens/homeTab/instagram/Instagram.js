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
        `https://graph.instagram.com/me/media?fields=media_url,caption,permalink&access_token=${INSTA_ACCESS}`
      )
      .then((res) => {
        setData(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View>
      <Image source={{ uri: data?.permalink }} />
      <Text>{data?.caption}</Text>
    </View>
  );
}
