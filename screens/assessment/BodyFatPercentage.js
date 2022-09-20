import { SafeAreaView } from 'react-native';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import TextContainer from '../../components/TextContainer';
import useStore from '../../state/Store';


function BodyFatPercentage({ navigation }) {
  const state = useStore();
  console.log(state.assessment);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <TextContainer>
          Body Fat % is the percentage of fat on our body compared to every thing else in our body such as organic muscle tissue, water, and bones. Fat is essential for our bodies to thrive. Women in particular need somewhere between 21-33 percent body fat.
          {"\n"}{"\n"}
          Do you know your BF%?
        </TextContainer>
          <StandardButton title="Yes" onPress={() => {navigation.navigate('BodyFatKnown')}} />
          <StandardButton title="No" onPress={() => {navigation.navigate('Pregnant')}} />
          <StandardButton title="I used calipers and need to calculate it" onPress={() => {navigation.navigate('CaliperSites')}} />
          <LArrowButton onPress={() => navigation.goBack()}/>
      </Container>
    </SafeAreaView>
  );
}

export default BodyFatPercentage;
