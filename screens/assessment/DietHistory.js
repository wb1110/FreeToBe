import { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import SingleSelectCheck from '../../components/SingleSelectCheck';
import TextContainer from '../../components/TextContainer';

function DietHistory({ navigation }) {
  const [selected, setSelected] = useState(0);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <TextContainer>
          When you think about your experience when it comes to dieting you most likely fit in which
          of these categories?
        </TextContainer>
        <View style={{ alignItems: 'flex-start' }}>
          {selected === 1 ? (
            <SingleSelectCheck
              title="Never been on a diet"
              checked
              onPress={() => setSelected(1)}
            />
          ) : (
            <SingleSelectCheck
              title="Never been on a diet"
              checked={false}
              onPress={() => setSelected(1)}
            />
          )}
          {selected === 2 ? (
            <SingleSelectCheck
              title="Have gone through different phases in my life of eating healthy, losing weight, then returning to normal eating habits and gaining the weight back"
              checked
              onPress={() => setSelected(2)}
            />
          ) : (
            <SingleSelectCheck
              title="Have gone through different phases in my life of eating healthy, losing weight, then returning to normal eating habits and gaining the weight back"
              checked={false}
              onPress={() => setSelected(2)}
            />
          )}
          {selected === 3 ? (
            <SingleSelectCheck
              title="Eating disorder - I have a negative relationship with food"
              checked
              onPress={() => setSelected(3)}
            />
          ) : (
            <SingleSelectCheck
              title="Eating disorder - I have a negative relationship with food"
              checked={false}
              onPress={() => setSelected(3)}
            />
          )}
        </View>
        {selected ? (
          <StandardButton
            title="Submit"
            onPress={() => {
              navigation.navigate('FoodPreferences');
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

export default DietHistory;
