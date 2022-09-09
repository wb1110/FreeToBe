import { SafeAreaView } from 'react-native';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import CustomText from '../../components/CustomText';
import useStore from '../../state/Store';


function Gender({ navigation }) {
  const state = useStore();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <CustomText>Before we get started in order to make the best plan for you, we will need some more information.</CustomText>
        <CustomText>Gender</CustomText>
        <CustomText>Fill in the following to get started:</CustomText>
        <StandardButton title="Female" onPress={() => {navigation.navigate('HeightWeightAge'); state.setGender('Female') }} />
        <StandardButton title="Nonbinary" onPress={() => {navigation.navigate('HeightWeightAge'); state.setGender('Nonbinary') }} />
          <LArrowButton onPress={() => navigation.goBack()} />
      </Container>
    </SafeAreaView>
  );
}

export default Gender;
