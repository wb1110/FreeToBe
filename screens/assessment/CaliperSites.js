import { Input } from "@rneui/themed";
import { SafeAreaView, View } from 'react-native';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import LArrowButton from '../../components/Buttons/LArrowButton';
import RoundButton from '../../components/Buttons/RoundButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import CustomText from '../../components/CustomText';


function CaliperSites({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <CustomText>
          How many sites did you use?
        </CustomText>
        <View style={{ flexDirection: 'row' }}>
          <RoundButton title="3"/>
          <RoundButton title="4"/>
          <RoundButton title="7"/>
          <RoundButton title="9"/>
        </View>
        <CustomText>
          Type in your measurements in mm
        </CustomText>
        <Input label='Abdominal' />
        <Input label='Triceps' />
        <Input label='Suprailiac' />
        <StandardButton title="Submit" onPress={() => {navigation.navigate('Home')}}/>
        <LArrowButton onPress={() => {navigation.navigate('BodyFatPercentage')}}/>
      </Container>
    </SafeAreaView>
  );
}

export default CaliperSites;
