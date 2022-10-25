import { Text } from '@rneui/themed';
import { View } from 'react-native';

export default function MacroBar({ protein, carbs, fats, calories }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
        width: '100%',
        margin: '2%',
      }}
    >
      <View>
        <Text>Protein</Text>
        <Text>{`${protein}g`}</Text>
        {/* {tracker.date
                  ? tracker.map((dayObj) =>
                      dayObj.meals.map((mealObj) =>
                        mealObj.foodItems.map((foodObj) =>
                          setProtein(protein + foodObj.foodProtein)
                        )
                      )
                    )
                  : null} */}
      </View>
      <View>
        <Text>Fat</Text>
        <Text>{`${fats}g`}</Text>
      </View>
      <View>
        <Text>Carbs</Text>
        <Text>{`${carbs}g`}</Text>
      </View>
      <View>
        <Text>Calories</Text>
        <Text>{`${calories}`}</Text>
      </View>
    </View>
  );
}
