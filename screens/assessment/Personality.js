import { Text } from '@rneui/themed';
import { useState } from 'react';
import { Keyboard, SafeAreaView, TouchableWithoutFeedback, View } from 'react-native';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import CustomCheckBox from '../../components/CustomCheckBox';
import FocusedStatusBar from '../../components/FocusedStatusBar';

function Personality({ navigation }) {
  const [upholder, setUpholder] = useState(false);
  const [obliger, setObliger] = useState(false);
  const [rebel, setRebel] = useState(false);
  const [questioner, setQuestioner] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar />
        <Container>
          <Text h4>
            If you were to categorize yourself into 1 of the 4 types of people, which would it be?
          </Text>
          <View style={{ alignItems: 'flex-start' }}>
            <CustomCheckBox
              title="Upholder - meets outer and inner expectations"
              state={upholder}
              setState={setUpholder}
            />
            <CustomCheckBox
              title="Obliger - meets outer expectations but resists inner expectations"
              state={obliger}
              setState={setObliger}
            />
            <CustomCheckBox
              title="Questioner - resists outer expectations by meets inner expectations"
              state={questioner}
              setState={setQuestioner}
            />
            <CustomCheckBox
              title="Rebel - resists inner and outer expectations"
              state={rebel}
              setState={setRebel}
            />
          </View>
          {obliger || questioner || upholder || rebel ? (
            <StandardButton title="Submit" onPress={() => navigation.navigate('Disclaimer')} />
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
