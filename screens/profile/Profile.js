import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import AssessmentResults from './AssessmentResults';
import Day1 from './ThreeDay/Day1';
import Day2 from './ThreeDay/Day2';
import Day3 from './ThreeDay/Day3';
import ThreeDay from './ThreeDay/ThreeDay';

const Stack = createStackNavigator();

export function UserProfile({ navigation }) {
return(
  <Container>
  <StandardButton title='Assessment Results'  onPress={() => navigation.navigate('AssessmentResults')} />
  <StandardButton title='Three-Day Dietary Record' onPress={() => navigation.navigate('ThreeDay')} />
</Container>
)
}

function Profile() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Profile">
    <Stack.Screen name="Profile" component={UserProfile} />
    <Stack.Screen name="AssessmentResults" component={AssessmentResults} />
    <Stack.Screen name="ThreeDay" component={ThreeDay} />
    <Stack.Screen name="Day1" component={Day1} />
    <Stack.Screen name="Day2" component={Day2} />
    <Stack.Screen name="Day3" component={Day3} />
  </Stack.Navigator>
  )
}

export default Profile