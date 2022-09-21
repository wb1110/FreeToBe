import { useState } from 'react';
import { SafeAreaView, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Text } from '@rneui/themed';
import LArrowButton from '../../components/Buttons/LArrowButton';
import RoundButton from '../../components/Buttons/RoundButton';
import Container from '../../components/Container';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import FourSite from './skinFoldSites/FourSite';
import NineSite from './skinFoldSites/NineSite';
import SevenSite from './skinFoldSites/SevenSite';
import ThreeSite from './skinFoldSites/ThreeSite';
import RoundButtonSelected from '../../components/Buttons/RoundButtonSelected';

function CaliperSites({ navigation }) {
  const [selected, setSelected] = useState(0);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar />
        <Container>
          <Text>How many sites did you use?</Text>
          <View style={{ flexDirection: 'row' }}>
            {selected === 3 ? (
              <RoundButtonSelected title="3" onPress={() => setSelected(3)} />
            ) : (
              <RoundButton title="3" onPress={() => setSelected(3)} />
            )}
            {selected === 4 ? (
              <RoundButtonSelected title="4" type="clear" onPress={() => setSelected(4)} />
            ) : (
              <RoundButton title="4" onPress={() => setSelected(4)} />
            )}
            {selected === 7 ? (
              <RoundButtonSelected title="7" type="clear" onPress={() => setSelected(7)} />
            ) : (
              <RoundButton title="7" onPress={() => setSelected(7)} />
            )}
            {selected === 9 ? (
              <RoundButtonSelected title="9" type="clear" onPress={() => setSelected(9)} />
            ) : (
              <RoundButton title="9" onPress={() => setSelected(9)} />
            )}
          </View>
          <Text>Type in your measurements in mm</Text>
          <Container>
            {selected === 3 ? <ThreeSite navigation={navigation} /> : null}
            {selected === 4 ? <FourSite navigation={navigation} /> : null}
            {selected === 7 ? <SevenSite navigation={navigation} /> : null}
            {selected === 9 ? <NineSite navigation={navigation} /> : null}
          </Container>
          <LArrowButton onPress={() => navigation.goBack()} />
        </Container>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default CaliperSites;
