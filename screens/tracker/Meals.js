import { View } from 'react-native';
import MealItem from './MealItem';

export default function Meals({ tracker, currentIndex, navigation }) {
  return (
    <View style={{ flex: 5, margin: '2%', width: '100%' }}>
      {tracker[currentIndex]
        ? tracker[currentIndex].meals.map((item, index) => (
            <MealItem
              mealNumber={index + 1}
              mealName={item.mealName}
              key={item.mealName}
              mealTime={item.mealTime}
              foodItems={item.foodItems}
              navigation={navigation}
              dayIndex={currentIndex}
            />
          ))
        : null}
    </View>
  );
}
