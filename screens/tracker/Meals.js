import { ScrollView, View } from 'react-native';
import { FAB } from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons';
import MealItem from './MealItem';

export default function Meals({ tracker, currentIndex, navigation }) {
  const savedDate = tracker[currentIndex];
  return (
    <View style={{ flex: 5, margin: '2%', width: '100%' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {savedDate
          ? savedDate.meals.map((item) => (
              <MealItem
                mealName={item.mealName}
                key={item.mealID}
                mealTime={item.mealTime}
                foodItems={item.foodItems}
                navigation={navigation}
                dayIndex={currentIndex}
              />
            ))
          : null}
        <FAB
          icon={<Ionicons name="add" size={24} color="black" />}
          size="medium"
          color="white"
          style={{ marginTop: '2%' }}
          onPress={() => navigation.navigate('AddMeal', { savedDate })}
        />
      </ScrollView>
    </View>
  );
}
