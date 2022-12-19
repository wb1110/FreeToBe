import { View, StyleSheet, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pickerContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: '30%',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
  },
});

function ServingSizePicker({ modalOpen, setModalOpen, value, setValue, items }) {
  const pickerData = (data) =>
    data?.length > 0 &&
    data.map((val, index) => <Picker.Item label={val.name} value={val} key={index} />); // eslint-disable-line

  return (
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
          <View style={styles.pickerContainer}>
            <Picker selectedValue={value} onValueChange={(itemValue) => setValue(itemValue)}>
              {pickerData(items)}
            </Picker>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
}

export default ServingSizePicker;
