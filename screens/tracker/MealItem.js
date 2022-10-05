import { Dialog, Text, useTheme } from '@rneui/themed';
import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import { useState } from 'react';
import FoodItem from './FoodItem';

export default function MealItem({ mealTime, mealNumber }) {
  const { theme } = useTheme();
  const [visible, setVisible] = useState(false);

  const toggleDialog = () => {
    setVisible(!visible);
  };

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
        <MaterialIcons name="edit" size={24} color="white" onPress={toggleDialog} />
        <Dialog
          isVisible={visible}
          onBackdropPress={toggleDialog}
          overlayStyle={{
            flexDirection: 'column',
            width: '50%',
          }}
        >
          <Dialog.Actions>
            <Dialog.Button
              title="Edit Meal"
              onPress={() => console.log('Primary Action Clicked!')}
            />
            <Dialog.Button
              title="Edit Food Item"
              onPress={() => console.log('Secondary Action Clicked!')}
            />
          </Dialog.Actions>
        </Dialog>
        <MaterialIcons name="delete" size={24} color="white" />
      </View>
    </View>
  );
}
