import { View, Text } from 'react-native'
import React from 'react'

const MyCustomerPicker = ({
  modalOpen,
  setModalOpen,
  value,
  setValue,
  data
}) =>
{

  const pickerData = () => {
    return (
      <Picker.Item label="Java" value="java" />
    )
  }
  return (
    <Modal
            animationType="slide"
            transparent={true}
            visible={heightModal}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View
              style={{
                flex: 1,
              }}
            >
              <View
                style={{
                  backgroundColor: 'white',
                  width: '100%',
                  height: '40%',
                  position: 'absolute',
                  bottom: 0,
                }}
              >
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <NarrowButton title="Close" onPress={() => setHeightModal(!heightModal)}/>
                </View>
                <Picker
                  selectedValue={height}
                  onValueChange={(itemValue, itemIndex) =>
                    setHeight(itemValue)
                  }>
                  <Picker.Item label="Java" value="java" />
                  <Picker.Item label="JavaScript" value="js" />
                </Picker>
              </View>
            </View>
          </Modal>
  )
}

export default MyCustomerPicker