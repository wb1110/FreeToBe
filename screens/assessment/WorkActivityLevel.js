import { Text } from '@rneui/themed';
import { useState } from 'react';
import { Keyboard, SafeAreaView, TouchableWithoutFeedback, View } from 'react-native';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import SingleSelectCheck from '../../components/SingleSelectCheck';
import useStore from '../../state/Store';

function WorkActivityLevel({ navigation }) {
  const state = useStore();
  const [selected, setSelected] = useState(0);
  const values = {
    workActivity: selected,
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar />
        <Container>
          <Text h4>What is your activity level at work?</Text>
          <View style={{ alignItems: 'flex-start' }}>
            {selected === 1 ? (
              <SingleSelectCheck
                title="No activity - desk job with minimal movement"
                checked
                onPress={() => setSelected(1)}
              />
            ) : (
              <SingleSelectCheck
                title="No activity - desk job with minimal movement"
                checked={false}
                onPress={() => setSelected(1)}
              />
            )}
            {selected === 2 ? (
              <SingleSelectCheck
                title="Moderate - requires some movement (realtor, teacher, pastor, sales, some stay at home moms)"
                checked
                onPress={() => setSelected(2)}
              />
            ) : (
              <SingleSelectCheck
                title="Moderate - requires some movement (realtor, teacher, pastor, sales, some stay at home moms)"
                checked={false}
                onPress={() => setSelected(2)}
              />
            )}
            {selected === 3 ? (
              <SingleSelectCheck
                title="Very active - requires physical activity (trainer, construction worker, stay at home mama with littles)"
                checked
                onPress={() => setSelected(3)}
              />
            ) : (
              <SingleSelectCheck
                title="Very active - requires physical activity (trainer, construction worker, stay at home mama with littles)"
                checked={false}
                onPress={() => setSelected(3)}
              />
            )}
            {selected === 4 ? (
              <SingleSelectCheck
                title="Extremely active - professional/collegiate athlete"
                checked
                onPress={() => setSelected(4)}
              />
            ) : (
              <SingleSelectCheck
                title="Extremely active - professional/collegiate athlete"
                checked={false}
                onPress={() => setSelected(4)}
              />
            )}
          </View>
          {selected ? (
            <StandardButton
              title="Submit"
              onPress={() => {
                state.setWorkActivity(values);
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

export default WorkActivityLevel;
