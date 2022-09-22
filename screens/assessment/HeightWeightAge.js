import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { age as dataAge, height as dataHeight, weight as dataWeight } from '../../assets/data/data';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import MyCustomerPicker from '../../components/MyCustomerPicker';
import useStore from '../../state/Store';

function HeightWeightAge({ navigation }) {
  const state = useStore();
  const values = {
    height: 0,
    weight: 0,
    age: 0,
  };

  const [heightModal, setHeightModal] = useState(false);
  const [weightModal, setWeightModal] = useState(false);
  const [ageModal, setAgeModal] = useState(false);

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');

  const conversion = (x, y, z) => {
    const array = x.match(/\d+/g);
    const feet = parseInt(array[0], 10) * 12;
    const inches = parseInt(array[1], 10);
    const nHeight = feet + inches;
    const nWeight = parseInt(y, 10);
    const nAge = parseInt(z, 10);

    values.height = nHeight;
    values.weight = nWeight;
    values.age = nAge;

    return values;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <MyCustomerPicker
          setModalOpen={setHeightModal}
          modalOpen={heightModal}
          value={height}
          items={dataHeight}
          setValue={setHeight}
        />
        <StandardButton title={`Height: ${height}`} onPress={() => setHeightModal(!heightModal)} />
        <MyCustomerPicker
          setModalOpen={setWeightModal}
          modalOpen={weightModal}
          value={weight}
          items={dataWeight}
          setValue={setWeight}
        />
        <StandardButton title={`Weight: ${weight}`} onPress={() => setWeightModal(!weightModal)} />
        <MyCustomerPicker
          setModalOpen={setAgeModal}
          modalOpen={ageModal}
          value={age}
          items={dataAge}
          setValue={setAge}
        />
        <StandardButton title={`Age: ${age}`} onPress={() => setAgeModal(!ageModal)} />
        {height && weight && age ? (
          <StandardButton
            title="Submit"
            onPress={() => {
              state.setAssessment(conversion(height, weight, age));
              navigation.navigate('BodyFatPercentage');
            }}
          />
        ) : (
          <StandardButton title="Submit" disabled />
        )}

        <LArrowButton onPress={() => navigation.goBack()} />
      </Container>
    </SafeAreaView>
  );
}

export default HeightWeightAge;
