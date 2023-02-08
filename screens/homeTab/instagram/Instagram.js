import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Instagram() {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(
        'https://graph.instagram.com/me/media?fields=media_url,caption,permalink&access_token=IGQVJWRWFPUVJqUExlRnRlZA21nV1JMakcxYUZAXQ1FJcURnZAElGLU96NnFlR1IwbktYU1ZAqemdVMUVZAekxHa2NCenAxeUNCVHU1ekdoQ01TcldNRVZAlYzNVencxajZAYXzJGbnI1UksxQkZAtWUpqcXdLdAZDZD'
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
      <Text>{data?.caption}</Text>
    </View>
  );
}
