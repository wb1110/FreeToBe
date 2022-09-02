import { useState } from 'react'
import { Text, View, SafeAreaView, FlatList } from 'react-native';

import { COLORS, NFTData } from '../constants';
import { HomeHeader, FocusedStatusBard, FocusedStatusBar } from '../components';
import Container from '../components/Container';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <View>
        <Text>
          Welcome!
        </Text>
        <Text>
            Are you ready to have real sustainable change?
        </Text>
        <Text>
            Fill in the following to get started:
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default Home