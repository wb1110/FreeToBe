import { Text } from '@rneui/themed';
import { useState } from 'react';
import { Keyboard, SafeAreaView, TouchableWithoutFeedback, View } from 'react-native';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import SingleSelectCheck from '../../components/SingleSelectCheck';
import useStore from '../../state/Store';

function ActivityLevel({ navigation }) {
  const state = useStore();
  const [selected, setSelected] = useState(0);
  const values = {
    exerciseActivity: selected,
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar />
        <Container>
          <Text h4>What is your activity level outside of work?</Text>
          <View style={{ alignItems: 'flex-start' }}>
            {selected === 1 ? (
              <SingleSelectCheck title="No exercise" checked onPress={() => setSelected(1)} />
            ) : (
              <SingleSelectCheck
                title="No exercise"
                checked={false}
                onPress={() => setSelected(1)}
              />
            )}
            {selected === 2 ? (
              <SingleSelectCheck
                title="Light Exercise/Rec Sports (1-3x per week)"
                checked
                onPress={() => setSelected(2)}
              />
            ) : (
              <SingleSelectCheck
                title="Light Exercise/Rec Sports (1-3x per week)"
                checked={false}
                onPress={() => setSelected(2)}
              />
            )}
            {selected === 3 ? (
              <SingleSelectCheck
                title="Moderate Exercise/Sports (3-5x per week)"
                checked
                onPress={() => setSelected(3)}
              />
            ) : (
              <SingleSelectCheck
                title="Moderate Exercise/Sports (3-5x per week)"
                checked={false}
                onPress={() => setSelected(3)}
              />
            )}
            {selected === 4 ? (
              <SingleSelectCheck
                title="Extreme Exercise (6-7x per week)"
                checked
                onPress={() => setSelected(4)}
              />
            ) : (
              <SingleSelectCheck
                title="Extreme Exercise (6-7x per week)"
                checked={false}
                onPress={() => setSelected(4)}
              />
            )}
          </View>
          {selected ? (
            <StandardButton
              title="Submit"
              onPress={() => {
                state.setExerciseActivity(values);
                navigation.navigate('Personality');
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

export default ActivityLevel;
