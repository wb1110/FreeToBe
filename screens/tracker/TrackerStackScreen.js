import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import AddFoodItem from './AddFoodItem';
import AddFoodManually from './AddFoodManually';
import AddMeal from './AddMeal';
import EditFood from './EditFood';
import EditFoodManually from './EditFoodManually';
import EditMeal from './EditMeal';
import FoodDetails from './FoodDetails';
import Tracker from './Tracker';
// Before rendering any navigation stack
enableScreens();

const TrackerStack = createNativeStackNavigator();

export default function TrackerStackScreen() {
  return (
    <TrackerStack.Navigator screenOptions={{ headerShown: false }}>
      <TrackerStack.Screen name="TrackerHome" component={Tracker} />
      <TrackerStack.Screen name="AddMeal" component={AddMeal} />
      <TrackerStack.Screen name="EditMeal" component={EditMeal} />
      <TrackerStack.Screen name="AddFoodItem" component={AddFoodItem} />
      <TrackerStack.Screen name="FoodDetails" component={FoodDetails} />
      <TrackerStack.Screen name="AddFoodManually" component={AddFoodManually} />
      <TrackerStack.Screen name="EditFood" component={EditFood} />
    </TrackerStack.Navigator>
  );
}
