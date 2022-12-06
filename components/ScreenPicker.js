import { Picker } from '@react-native-picker/picker';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pickerContainer: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
  },
});

function ScreenPicker({ value, setValue, items }) {
  const pickerData = (data) =>
    data?.length > 0 &&
    data.map((val, index) => (
      <Picker.Item label={val} value={val} key={index} /> // eslint-disable-line
    ));

  return (
    <View style={styles.pickerContainer}>
      <Picker
        itemStyle={{ color: 'white' }}
        selectedValue={value}
        onValueChange={(itemValue) => setValue(itemValue)}
      >
        {pickerData(items)}
      </Picker>
    </View>
  );
}

export default ScreenPicker;
