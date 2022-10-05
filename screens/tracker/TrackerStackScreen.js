import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddMeal from './AddMeal';
import Tracker from './Tracker';

const TrackerStack = createNativeStackNavigator();

export default function TrackerStackScreen() {
  return (
    <TrackerStack.Navigator screenOptions={{ headerShown: false }}>
      <TrackerStack.Screen name="TrackerHome" component={Tracker} />
      <TrackerStack.Screen name="AddMeal" component={AddMeal} />
    </TrackerStack.Navigator>
  );
}
