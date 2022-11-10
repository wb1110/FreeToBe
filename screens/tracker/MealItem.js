import { Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { Button, Text, useTheme } from '@rneui/themed';
import { useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import useTrackerStore from '../../state/TrackerStore';

export default function MealItem({
  mealTime,
  mealNumber,
  foodItems,
  navigation,
  mealName,
  dayIndex,
}) {
  const state = useTrackerStore();
  const { deleteMeal } = state;
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    menuContainer: {
      backgroundColor: 'white',
      width: '100%',
      height: '20%',
      position: 'absolute',
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerMenu: {
      backgroundColor: theme.colors.primary,
      width: '90%',
      borderRadius: 20,
      justifyContent: 'center',
    },
  });
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View
      style={{
        backgroundColor: theme.colors.primary,
        padding: '2%',
        marginTop: '2%',
        width: '95%',
        justifyContent: 'space-between',
      }}
    >
      <View>
        <View style={{ flexDirection: 'row', marginBottom: '2%' }}>
          <Text h4>
            Meal {mealNumber} {mealName} {mealTime}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {foodItems
            ? foodItems.map((item) => (
                <Button
                  key={item.foodName}
                  title={item.foodName}
                  titleStyle={{ textAlign: 'left' }}
                  onPress={() => navigation.navigate('EditManually', { mealName, dayIndex, item })}
                />
              ))
            : null}
        </View>
      </View>
      <View
        style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'flex-end' }}
      >
        <Button
          titleStyle={{
            color: theme.colors.primary,
          }}
          containerStyle={{
            width: '25%',
          }}
          color={theme.colors.white}
          onPress={() => navigation.navigate('AddFoodItem', { mealName, dayIndex })}
          title="Add Food"
          size="sm"
        />
        <FontAwesome5
          name="ellipsis-h"
          size={16}
          color="white"
          onPress={() => setModalOpen(!modalOpen)}
        />
      </View>
      <Modal
        animationType="slide"
        transparent
        visible={modalOpen}
        onRequestClose={() => {
          setModalOpen(!modalOpen);
        }}
      >
        <TouchableOpacity
          style={styles.container}
          activeOpacity={1}
          onPressOut={() => setModalOpen(!modalOpen)}
        >
          <TouchableWithoutFeedback>
            <View style={styles.menuContainer}>
              <View style={styles.innerMenu}>
                <TouchableOpacity
                  style={{
                    padding: '5%',
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                  onPress={() => navigation.navigate('EditMeal', { dayIndex, mealName, mealTime })}
                >
                  <Feather name="edit-2" size={24} color={theme.colors.white} />
                  <Text style={{ marginLeft: '2%' }}>Edit Meal</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    padding: '5%',
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                  onPress={() => deleteMeal(dayIndex, mealName)}
                >
                  <MaterialIcons name="delete-outline" size={24} color={theme.colors.white} />
                  <Text style={{ marginLeft: '2%' }}>Delete Meal</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
