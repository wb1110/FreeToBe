import { SafeAreaView } from 'react-native';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import TextContainer from '../../components/TextContainer';

function BodyFatPercentage({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <TextContainer>
          Body Fat % is the percentage of fat on our body compared to everything else in our body
          such as organic muscle tissue, water, and bones.
          {'\n'}
          {'\n'}
          Fat is essential for our bodies to thrive. Women in particular need somewhere between
          21-33% body fat.
          {'\n'}
          {'\n'}
          Do you know your body fat %?
        </TextContainer>
        <StandardButton
          title="Yes"
          onPress={() => {
            navigation.navigate('BodyFatKnown');
          }}
        />
        <StandardButton
          title="No"
          onPress={() => {
            navigation.navigate('Pregnant');
          }}
        />
        <StandardButton
          title="I used calipers and need to calculate it"
          onPress={() => {
            navigation.navigate('CaliperSites');
          }}
        />
        <LArrowButton onPress={() => navigation.goBack()} />
      </Container>
    </SafeAreaView>
  );
}

export default BodyFatPercentage;
