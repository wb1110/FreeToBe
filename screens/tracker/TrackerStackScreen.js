import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddFoodItem from './AddFoodItem';
import AddMeal from './AddMeal';
import EditManually from './EditManually';
import EditMeal from './EditMeal';
import Tracker from './Tracker';

const TrackerStack = createNativeStackNavigator();

export default function TrackerStackScreen() {
  return (
    <TrackerStack.Navigator screenOptions={{ headerShown: false }}>
      <TrackerStack.Screen name="TrackerHome" component={Tracker} />
      <TrackerStack.Screen name="AddMeal" component={AddMeal} />
      <TrackerStack.Screen name="EditMeal" component={EditMeal} />
      <TrackerStack.Screen name="AddFoodItem" component={AddFoodItem} />
      <TrackerStack.Screen name="EditManually" component={EditManually} />
    </TrackerStack.Navigator>
  );
}
