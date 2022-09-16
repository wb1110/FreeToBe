import { View } from 'react-native'
import { Text, Button } from '@rneui/themed'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import useStore from '../../state/Store'
import StandardButton from '../../components/Buttons/StandardButton'

export default function AssessmentResults() {
  const state = useStore();
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('assessment', jsonValue)
      console.log(jsonValue)
    } catch (e) {
      // saving error
      console.log(e);
      return e;
    }
  }

  const getAssessment = async () => {
    try {
      let assessment = await AsyncStorage.getItem('assessment')
      assessment = JSON.parse(assessment)
      console.log(assessment);
    } catch(e) {
      // read error
      console.log(e);
      return e;
    }
  }
  // useEffect(() => {
  //   getAssessment();
  // }, [])

//state.setAssessment(getAssessment());

  return (
    <View>
      <Text>AssessmentResults</Text>
    <Text></Text>
    <StandardButton title='Set' onPress={() => storeData(state.assessment)}/>
    <StandardButton title='Get' onPress={() => getAssessment()}/>


    </View>
  )
}