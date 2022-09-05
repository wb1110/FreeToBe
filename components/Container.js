import React from 'react';
import { View } from 'react-native';

function Container(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: '2%' }}>
      {props.children}
    </View>
  );
}

export default Container;
