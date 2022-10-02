import { Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import FoodItem from './FoodItem';

export default function MealItem() {
  const { theme } = useTheme();
  return (
    <View
      style={{
        backgroundColor: theme.colors.primary,
        padding: '2%',
        width: '95%',
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <Text h4>Meal Name</Text>
        <Text h4 style={{ marginLeft: '4%' }}>
          Meal Time
        </Text>
      </View>
      <View>
        <FoodItem />
      </View>
    </View>
  );
}
