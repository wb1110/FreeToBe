import { SafeAreaView } from 'react-native';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import CustomText from '../../components/CustomText';


function BodyFatPercentage({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <CustomText>
          Body Fat % is the percentage of fat on our body compared to every thing else in our body such as organic muscle tissue, water, and bones. Fat is essential for our bodies to thrive. Women in particular need somewhere between 21-33 percent body fat.
        </CustomText>
        <CustomText>
          Do you know your BF%
        </CustomText>
          <StandardButton title="Yes" onPress={() => {navigation.navigate('BodyFatKnown')}} />
          <StandardButton title="No" />
          <StandardButton title="I used calipers and need to calculate it" onPress={() => {navigation.navigate('CaliperSites')}} />
          <LArrowButton onPress={() => {navigation.navigate('HeightWeightAge')}}/>
      </Container>
    </SafeAreaView>
  );
}

export default BodyFatPercentage;
