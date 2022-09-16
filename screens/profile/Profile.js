import { View, Text } from 'react-native'
import React from 'react'
import StandardButton from '../../components/Buttons/StandardButton'
import Container from '../../components/Container'
import { createStackNavigator } from '@react-navigation/stack';
import ThreeDay from './ThreeDay/ThreeDay';
import Day1 from './ThreeDay/Day1';
import Day2 from './ThreeDay/Day2';
import Day3 from './ThreeDay/Day3';

const Stack = createStackNavigator();

export const Profile = ({ navigation }) => {
return(
  <Container>
  <StandardButton title='Assessment Results' />
  <StandardButton title='Three-Day Dietary Record' onPress={() => navigation.navigate('ThreeDay')} />
</Container>
)
}

const ProfileNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Profile">
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="ThreeDay" component={ThreeDay} />
    <Stack.Screen name="Day1" component={Day1} />
    <Stack.Screen name="Day2" component={Day2} />
    <Stack.Screen name="Day3" component={Day3} />
  </Stack.Navigator>
  )
}

export default ProfileNavigator