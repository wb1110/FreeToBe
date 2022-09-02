import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

function Container(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {props.children}
    </View>
  );
}

export default Container;
