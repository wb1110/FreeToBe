import AsyncStorage from '@react-native-async-storage/async-storage'
import { Text } from '@rneui/themed'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import StandardButton from '../../components/Buttons/StandardButton'
import useStore from '../../state/Store'
import Calculations from '../assessment/Calculations'

export default function AssessmentResults() {
  const state = useStore();
  const [values, setValues] = useState();

  const getAssessment = async () => {
    let userAssessment
    try {
      const assessment = await AsyncStorage.getItem('assessment')
      userAssessment = JSON.parse(assessment)
      const { bodyFat } = userAssessment
      setValues(bodyFat)
    } catch(e) {
      return e;
    }
    return userAssessment;
  }
  useEffect(() => {
    getAssessment();
    console.log(state.assessment);
  }, [])

  return (
    <View>
      <Text>AssessmentResults</Text>
    <Text>Bodyfat: {state.assessment.bodyFat}</Text>
    <Calculations />
    <StandardButton title='Get' onPress={() => getAssessment()}/>


    </View>
  )
}