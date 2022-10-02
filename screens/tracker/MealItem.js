import { Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import FoodItem from './FoodItem';

export default function MealItem({ mealName, mealTime }) {
  const { theme } = useTheme();
  return (
    <View
      style={{
        backgroundColor: theme.colors.primary,
        padding: '2%',
        marginTop: '2%',
        width: '95%',
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <Text h4 style={{ marginLeft: '5.5%' }}>
          {mealName}
        </Text>
        <Text h4 style={{ marginLeft: '4%' }}>
          {mealTime}
        </Text>
      </View>
      <View>
        <FoodItem />
      </View>
    </View>
  );
}
