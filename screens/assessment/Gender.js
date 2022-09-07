import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from '@rneui/themed';
import { FocusedStatusBar } from '../../components';
import Container from '../../components/Container';
import CustomText from '../../components/CustomText';
import useStore from '../../state/Store';
import StandardButton from '../../components/Buttons/StandardButton';
import LArrowButton from '../../components/Buttons/LArrowButton';


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
          <LArrowButton onPress={() => {navigation.navigate('Home')}} />
      </Container>
    </SafeAreaView>
  );
}

export default Gender;
