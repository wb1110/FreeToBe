import { Text, useTheme } from '@rneui/themed';
import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import FoodItem from './FoodItem';

export default function MealItem({ mealTime, mealNumber }) {
  const { theme } = useTheme();
  return (
    <View
      style={{
        backgroundColor: theme.colors.primary,
        padding: '2%',
        marginTop: '2%',
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Text h4 style={{ marginLeft: '5.5%' }}>
            Meal {mealNumber}
          </Text>
          <Text h4 style={{ marginLeft: '4%' }}>
            {mealTime}
          </Text>
        </View>
        <View>
          <FoodItem />
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MaterialIcons name="edit" size={24} color="white" />
        <MaterialIcons name="delete" size={24} color="white" />
      </View>
    </View>
  );
}
