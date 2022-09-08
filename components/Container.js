import React from 'react';
import { View } from 'react-native';

function Container(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 'auto', padding: '2%', width: '100%' }}>
      {props.children}
    </View>
  );
}

export default Container;
