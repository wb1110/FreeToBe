import React, { useState } from 'react';
import Container from '../components/Container';
import TextContainer from '../components/TextContainer';
import useStore from '../state/Store';
import { Tab, useTheme } from "@rneui/themed";
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function UserHome() {
  const state = useStore();
  const [index, setIndex] = useState();
  const { theme } = useTheme();
  
  return (
    <SafeAreaView style={{ justifyContent: 'space-between', flex: 1, backgroundColor: theme.colors.primary }}>
      <View style={{ flex: 1, backgroundColor: theme.colors.secondary }}>
        <TextContainer>
          Height: {state.assessment.height}
        </TextContainer>
        <TextContainer>
          Weight: {state.assessment.weight}
        </TextContainer>
        <TextContainer>
          Age: {state.assessment.age}
        </TextContainer>
        <TextContainer>
          Body Fat: {Math.round(state.assessment.bodyFat * 100) / 100}
        </TextContainer>
      </View>
      <Tab
        value={index} 
        onChange={(e) => setIndex(e)}
        variant='primary' 
        indicatorStyle={{
        backgroundColor: 'white',
        height: 3
        }}
      >
        <Tab.Item 
          title='Tracker' 
          titleStyle={{ fontSize: 12 }} 
          icon={{ name: 'analytics', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item 
          title='Assessment' 
          titleStyle={{ fontSize: 12 }} 
          icon={{ name: 'clipboard', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item 
          title='Metabolic' 
          titleStyle={{ fontSize: 12 }} 
          icon={{ name: 'restaurant', type: 'ionicon', color: 'white' }}
        />
      </Tab>
    </SafeAreaView>
  )
}