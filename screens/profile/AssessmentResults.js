import { View } from 'react-native'
import { Text, Button } from '@rneui/themed'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import useStore from '../../state/Store'
import StandardButton from '../../components/Buttons/StandardButton'

export default function AssessmentResults() {
  const [values, setValues] = useState();
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
    let userAssessment
    try {
      const assessment = await AsyncStorage.getItem('assessment')
      userAssessment = JSON.parse(assessment)
      const { bodyFat } = userAssessment
      setValues(bodyFat)
    } catch(e) {
      // read error
      console.log(e);
      return e;
    }
  }
  useEffect(() => {
    getAssessment();
  }, [])

  console.log(values);

  return (
    <View>
      <Text>AssessmentResults</Text>
    <Text>Bodyfat: {values}</Text>
    <StandardButton title='Set' onPress={() => state.setAssessment(getAssessment())}/>
    <StandardButton title='Get' onPress={() => getAssessment()}/>


    </View>
  )
}