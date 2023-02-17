import { Picker } from '@react-native-picker/picker';
import { Text } from '@rneui/themed';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { age as dataAge } from '../../../assets/data/data';
import OverlayForm from '../../../components/OverlayForm';
import { storeData } from '../../../functions/Posts';
import useAuthStore from '../../../state/AuthStore';
import useStore from '../../../state/Store';
import SettingsContainer from '../SettingsContainer';

export default function Age() {
  const { id } = useAuthStore();
  const { setNewAge, assessment } = useStore();
  const [age, setAge] = useState(assessment.age);
  const [visible, setVisible] = useState(false);
  let nAge;

  const pickerData = (data) =>
    data?.length > 0 &&
    data.map((val, index) => <Picker.Item label={val} value={val} key={index} color="white" />); // eslint-disable-line

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const conversion = (newAge) => {
    nAge = parseInt(newAge, 10);

    setAge(nAge);

    return age;
  };
  const handleSubmit = () => {
    setNewAge(id, conversion(age));
    toggleOverlay();
  };

  useEffect(() => {
    console.log(assessment.age);
    setAge(assessment.age);
  }, []);

  return (
    <SettingsContainer onPress={toggleOverlay}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
        <Text h4>Age</Text>
      </View>
      <OverlayForm
        overlayTitle="Age"
        visible={visible}
        setVisible={setVisible}
        handleSubmit={handleSubmit}
        handleReset={toggleOverlay}
      >
        <Picker selectedValue={age} onValueChange={(itemValue) => setAge(itemValue)}>
          {pickerData(dataAge)}
        </Picker>
      </OverlayForm>
    </SettingsContainer>
  );
}
