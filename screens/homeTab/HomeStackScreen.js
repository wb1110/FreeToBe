import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTab from './HomeTab';
import MacroDetails from './MacroDetails';

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeTab" component={HomeTab} />
      <HomeStack.Screen name="MacroDetails" component={MacroDetails} />
    </HomeStack.Navigator>
  );
}
