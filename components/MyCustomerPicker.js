import { View, StyleSheet, Modal } from 'react-native'
import {Picker} from '@react-native-picker/picker'
import React from 'react'
import NarrowButton from './Buttons/NarrowButton'

function MyCustomerPicker({
  modalOpen,
  setModalOpen,
  value,
  setValue,
  items
}) {

  const pickerData = (data) => (data?.length > 0) && (
      data.map((val, index) => <Picker.Item label={val} value={val} key={index} />)
        )
  return (
    <Modal
            animationType="slide"
            transparent
            visible={modalOpen}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.container}>
              <View style={styles.pickerContainer}>
                <View style={styles.closeContainer}>
                  <NarrowButton title="Close" onPress={() => setModalOpen(!modalOpen)}/>
                </View>
                <Picker
                  selectedValue={value}
                  onValueChange={(itemValue, itemIndex) =>
                    setValue(itemValue)
                  }>
                  {pickerData(items)}
                </Picker>
              </View>
            </View>
          </Modal>
  )
}

const styles=StyleSheet.create({
  container: {
      flex: 1,
  },
  pickerContainer: {
      backgroundColor: 'white',
      width: '100%',
      height: '40%',
      position: 'absolute',
      bottom: 0,
  },
  closeContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default MyCustomerPicker