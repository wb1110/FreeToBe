import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import HomeTab from './HomeTab';
import MacroDetails from './MacroDetails';
import MineralDetails from './MineralDetails';
// Before rendering any navigation stack
enableScreens();

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeTab" component={HomeTab} />
      <HomeStack.Screen name="MacroDetails" component={MacroDetails} />
      <HomeStack.Screen name="MineralDetails" component={MineralDetails} />
    </HomeStack.Navigator>
  );
}
