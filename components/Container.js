import React from 'react';
import { View } from 'react-native';

function Container(props) {
  return (
    <View contentContainerStyle={{flexGrow: props.flexGrow}} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 'auto', padding: '2%', width: '100%', height: props.height }}>
      {props.children}
    </View>
  );
}

export default Container;
