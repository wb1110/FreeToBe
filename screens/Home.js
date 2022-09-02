import { useState } from 'react';
import {
  Text, View, SafeAreaView, FlatList,
} from 'react-native';

import { COLORS, NFTData } from '../constants';
import { HomeHeader, FocusedStatusBard, FocusedStatusBar } from '../components';
import Container from '../components/Container';
import CustomText from '../components/CustomText';
import Button from '../components/Button';

function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <CustomText>
          Welcome!
        </CustomText>
        <Text>
          Are you ready to have real sustainable change?
        </Text>
        <Text>
          Fill in the following to get started:
        </Text>
        <Button>Let's Do This</Button>
      </Container>
    </SafeAreaView>
  );
}

export default Home;
