import { Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { Button, Text, useTheme } from '@rneui/themed';
import { useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import useTrackerStore from '../../state/TrackerStore';
import TimePicker from './TimePicker';

export default function MealItem({ mealTime, foodItems, navigation, mealName, dayIndex }) {
  const state = useTrackerStore();
  const [time, setTime] = useState(mealTime);
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

  function sum() {
    let caloriesSum = 0;
    // eslint-disable-next-line no-return-assign
    foodItems.forEach((item) => (caloriesSum += parseInt(item.calories, 10)));
    return caloriesSum;
  }

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
        <View
          style={{
            flexDirection: 'row',
            marginBottom: '2%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text h4>{mealName} </Text>
            <TimePicker mealTime={time} setTime={setTime} />
          </View>
          <Text>{sum()} cal</Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {foodItems
            ? foodItems.map((item) => (
                <TouchableOpacity
                  key={item.foodId}
                  style={{ marginBottom: '2%', width: '100%' }}
                  onPress={() => {
                    navigation.navigate('EditFood', {
                      mealName,
                      item,
                      dayIndex,
                    });
                  }}
                >
                  <Text>{item.foodName}</Text>
                </TouchableOpacity>
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
                  onPress={() =>
                    navigation.navigate('EditMeal', { dayIndex, mealName, time, setTime })
                  }
                >
                  <Feather name="edit-2" size={24} color={theme.colors.white} />
                  <Text style={{ marginLeft: '2%' }}>Edit Meal Name</Text>
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
