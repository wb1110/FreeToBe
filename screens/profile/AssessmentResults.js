import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from '@rneui/themed';
import { useEffect } from 'react';
import { View } from 'react-native';
import useStore from '../../state/Store';
import Calculations from '../assessment/Calculations';

export default function AssessmentResults() {
  const state = useStore();

  useEffect(() => {
    const getAssessment = async () => {
      let userAssessment;
      try {
        const assessment = await AsyncStorage.getItem('assessment');
        userAssessment = JSON.parse(assessment);
        state.setAssessment(userAssessment);
      } catch (e) {
        return e;
      }
      return userAssessment;
    };

    getAssessment();
  }, []);

  return (
    <View>
      <Text>AssessmentResults</Text>
      <Calculations />
    </View>
  );
}
