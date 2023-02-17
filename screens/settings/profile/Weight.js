import { Picker } from '@react-native-picker/picker';
import { Text } from '@rneui/themed';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { weight as dataWeight } from '../../../assets/data/data';
import OverlayForm from '../../../components/OverlayForm';
import { storeData } from '../../../functions/Posts';
import useAuthStore from '../../../state/AuthStore';
import useStore from '../../../state/Store';
import SettingsContainer from '../SettingsContainer';

export default function Weight() {
  const { id } = useAuthStore();
  const { setNewWeight, assessment } = useStore();
  const [weight, setWeight] = useState(assessment.weight);
  const [visible, setVisible] = useState(false);
  let nWeight;

  const pickerData = (data) =>
    data?.length > 0 &&
    data.map((val, index) => <Picker.Item label={val} value={val} key={index} color="white" />); // eslint-disable-line

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const conversion = (newWeight) => {
    nWeight = parseInt(newWeight, 10);

    setWeight(nWeight);

    return weight;
  };
  const handleSubmit = () => {
    setNewWeight(id, conversion(weight));
    toggleOverlay();
  };

  useEffect(() => {
    setWeight(assessment.weight);
  }, []);

  return (
    <SettingsContainer onPress={toggleOverlay}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
        <Text h4>Weight</Text>
      </View>
      <OverlayForm
        overlayTitle="Weight"
        visible={visible}
        setVisible={setVisible}
        handleSubmit={handleSubmit}
        handleReset={toggleOverlay}
      >
        <Picker selectedValue={weight} onValueChange={(itemValue) => setWeight(itemValue)}>
          {pickerData(dataWeight)}
        </Picker>
      </OverlayForm>
    </SettingsContainer>
  );
}
