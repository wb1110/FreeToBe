import { FontAwesome5, Feather, MaterialIcons } from '@expo/vector-icons';
import { Button, Text, useTheme } from '@rneui/themed';
import { useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

export default function MealItem({ mealTime, mealNumber, foodItems, navigation }) {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    menuContainer: {
      backgroundColor: 'white',
      width: '100%',
      height: '30%',
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
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <View>
        <View style={{ flexDirection: 'row', marginLeft: '5.5%', marginBottom: '2%' }}>
          <Text h4 style={{}}>
            Meal {mealNumber}
          </Text>
          <Text h4 style={{ marginLeft: '4%' }}>
            {mealTime}
          </Text>
        </View>
        <View style={{ marginLeft: '5.5%' }}>
          <View style={{ flexDirection: 'row' }}>
            {foodItems.map((item) => (
              <Text> {item.foodName}</Text>
            ))}
          </View>
          <View
            style={{
              backgroundColor: theme.colors.white,
              borderRadius: 20,
              alignItems: 'center',
              marginLeft: '2%',
              width: 90,
            }}
          >
            <Text
              style={{
                color: theme.colors.primary,
              }}
              onPress={() => navigation.navigate('AddFoodItem')}
            >
              Add Food
            </Text>
          </View>
        </View>
      </View>
      <View style={{ justifyContent: 'flex-end' }}>
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
                <View
                  style={{
                    padding: '5%',
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Feather name="edit-2" size={24} color={theme.colors.white} />
                  <Text style={{ marginLeft: '2%' }}>Edit Meal</Text>
                </View>
                <View
                  style={{
                    padding: '5%',
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <MaterialIcons name="delete-outline" size={24} color={theme.colors.white} />
                  <Text style={{ marginLeft: '2%' }}>Delete Meal</Text>
                </View>
                <View
                  style={{
                    padding: '5%',
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Feather name="edit-2" size={24} color={theme.colors.white} />
                  <Text style={{ marginLeft: '2%' }}>Edit Food Item</Text>
                </View>
                <View
                  style={{
                    padding: '5%',
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <MaterialIcons name="delete-outline" size={24} color={theme.colors.white} />
                  <Text style={{ marginLeft: '2%' }}>Delete Food Item</Text>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
