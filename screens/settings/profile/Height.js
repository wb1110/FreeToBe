import { Picker } from '@react-native-picker/picker';
import { Text } from '@rneui/themed';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { height as dataHeight } from '../../../assets/data/data';
import OverlayForm from '../../../components/OverlayForm';
import { storeData } from '../../../functions/Posts';
import useAuthStore from '../../../state/AuthStore';
import useStore from '../../../state/Store';
import SettingsContainer from '../SettingsContainer';

export default function Height() {
  const { id } = useAuthStore();
  const { setNewHeight, assessment } = useStore();
  const [height, setHeight] = useState(assessment.height);
  const [visible, setVisible] = useState(false);
  let nHeight;

  const pickerData = (data) =>
    data?.length > 0 &&
    data.map((val, index) => <Picker.Item label={val} value={val} key={index} color="white" />); // eslint-disable-line

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const conversion = (newHeight) => {
    const array = newHeight.match(/\d+/g);
    const feet = parseInt(array[0], 10) * 12;
    const inches = parseInt(array[1], 10);
    nHeight = feet + inches;
    console.log(nHeight, 'nHeight');
    setHeight(nHeight);
    return height;
  };
  const handleSubmit = () => {
    setNewHeight(id, conversion(height));
    toggleOverlay();
  };

  useEffect(() => {
    setHeight(assessment.height);
  }, []);

  return (
    <SettingsContainer onPress={toggleOverlay}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
        <Text h4>Height</Text>
        <Text h4>{assessment.height}</Text>
      </View>
      <OverlayForm
        overlayTitle="Height"
        visible={visible}
        setVisible={setVisible}
        handleSubmit={handleSubmit}
        handleReset={toggleOverlay}
      >
        <Picker selectedValue={height} onValueChange={(itemValue) => setHeight(itemValue)}>
          {pickerData(dataHeight)}
        </Picker>
      </OverlayForm>
    </SettingsContainer>
  );
}
