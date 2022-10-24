import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { age as dataAge, height as dataHeight, weight as dataWeight } from '../../assets/data/data';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import MyCustomerPicker from '../../components/MyCustomerPicker';
import TextContainer from '../../components/TextContainer';
import useStore from '../../state/Store';

function HeightWeightAge({ navigation }) {
  const state = useStore();
  let nHeight;
  let nWeight;
  let nAge;

  const values = {
    height: nHeight,
    weight: nWeight,
    age: nAge,
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
    nHeight = feet + inches;
    nWeight = parseInt(y, 10);
    nAge = parseInt(z, 10);

    values.height = nHeight;
    values.weight = nWeight;
    values.age = nAge;

    return values;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <TextContainer>Fill in the following to get started:</TextContainer>
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
              conversion(height, weight, age);
              state.setHWA(values);
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
