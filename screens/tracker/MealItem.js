import { Text } from '@rneui/themed';
import { View } from 'react-native';
import FoodItem from './FoodItem';

export default function MealItem() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row' }}>
        <Text h4>Meal Name</Text>
        <Text h4 style={{ marginLeft: '4%' }}>
          Meal Time
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <FoodItem />
      </View>
    </View>
  );
}
