import { Text } from '@rneui/themed';
import { useState } from 'react';
import { Keyboard, SafeAreaView, TouchableWithoutFeedback, View } from 'react-native';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import SingleSelectCheck from '../../components/SingleSelectCheck';
import useStore from '../../state/Store';
import useCalculations from './Calculations';

function Personality({ navigation }) {
  const state = useStore();
  const [selected, setSelected] = useState(false);
  const tdee = useCalculations();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <Text h4>Which of the following tendency types describes you best?</Text>
          <View style={{ alignItems: 'flex-start' }}>
            {selected === 1 ? (
              <SingleSelectCheck
                title="Upholder - meets outer and inner expectations"
                checked
                onPress={() => setSelected(1)}
              />
            ) : (
              <SingleSelectCheck
                title="Upholder - meets outer and inner expectations"
                checked={false}
                onPress={() => setSelected(1)}
              />
            )}
            {selected === 2 ? (
              <SingleSelectCheck
                title="Obliger - meets outer expectations but resists inner expectations"
                checked
                onPress={() => setSelected(2)}
              />
            ) : (
              <SingleSelectCheck
                title="Obliger - meets outer expectations but resists inner expectations"
                checked={false}
                onPress={() => setSelected(2)}
              />
            )}
            {selected === 3 ? (
              <SingleSelectCheck
                title="Questioner - resists outer expectations but meets inner expectations"
                checked
                onPress={() => setSelected(3)}
              />
            ) : (
              <SingleSelectCheck
                title="Questioner - resists outer expectations but meets inner expectations"
                checked={false}
                onPress={() => setSelected(3)}
              />
            )}
            {selected === 4 ? (
              <SingleSelectCheck
                title="Rebel - resists inner and outer expectations"
                checked
                onPress={() => setSelected(4)}
              />
            ) : (
              <SingleSelectCheck
                title="Rebel - resists inner and outer expectations"
                checked={false}
                onPress={() => setSelected(4)}
              />
            )}
          </View>
          {selected ? (
            <StandardButton
              title="Submit"
              onPress={() => {
                navigation.navigate('Disclaimer');
                state.setTDEE(tdee);
              }}
            />
          ) : (
            <StandardButton title="Submit" disabled />
          )}

          <LArrowButton onPress={() => navigation.goBack()} />
        </Container>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default Personality;
