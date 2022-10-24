import { useState } from 'react';
import { Keyboard, SafeAreaView, TouchableWithoutFeedback, View } from 'react-native';
import LArrowButton from '../../components/Buttons/LArrowButton';
import RoundButton from '../../components/Buttons/RoundButton';
import RoundButtonSelected from '../../components/Buttons/RoundButtonSelected';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import TextContainer from '../../components/TextContainer';

function ExternalStress({ navigation }) {
  const [selected, setSelected] = useState(0);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar />
        <Container>
          <TextContainer>
            External stress is stress that comes from outside sources. For example, pressure at work
            such as deadlines, major life changes, and relationship turmoil are all external
            stressors.
            {'\n'}
            {'\n'}
            What would you rate your external stress between 0-5?
            {'\n'}
            {'\n'}0 = no external stress
            {'\n'}
            {'\n'}5 = overwhelming amount of external stress
          </TextContainer>
          <View style={{ flexDirection: 'row' }}>
            {selected === 0 ? (
              <RoundButtonSelected title="0" type="clear" onPress={() => setSelected(0)} />
            ) : (
              <RoundButton title="0" onPress={() => setSelected(0)} />
            )}
            {selected === 1 ? (
              <RoundButtonSelected title="1" type="clear" onPress={() => setSelected(1)} />
            ) : (
              <RoundButton title="1" onPress={() => setSelected(1)} />
            )}
            {selected === 2 ? (
              <RoundButtonSelected title="2" type="clear" onPress={() => setSelected(2)} />
            ) : (
              <RoundButton title="2" onPress={() => setSelected(2)} />
            )}
            {selected === 3 ? (
              <RoundButtonSelected title="3" type="clear" onPress={() => setSelected(3)} />
            ) : (
              <RoundButton title="3" onPress={() => setSelected(3)} />
            )}
            {selected === 4 ? (
              <RoundButtonSelected title="4" type="clear" onPress={() => setSelected(4)} />
            ) : (
              <RoundButton title="4" onPress={() => setSelected(4)} />
            )}
            {selected === 5 ? (
              <RoundButtonSelected title="5" type="clear" onPress={() => setSelected(5)} />
            ) : (
              <RoundButton title="5" onPress={() => setSelected(5)} />
            )}
          </View>
          <StandardButton title="Submit" onPress={() => navigation.navigate('WorkActivityLevel')} />
          <LArrowButton onPress={() => navigation.goBack()} />
        </Container>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default ExternalStress;
