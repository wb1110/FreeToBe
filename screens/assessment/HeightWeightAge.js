import { SafeAreaView, Text } from 'react-native';
import { FocusedStatusBar } from '../../components';
import ArrowRight from '../../components/ArrowRight';
import Button from '../../components/Button';
import Container from '../../components/Container';
import CustomText from '../../components/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';


function HeightWeightAge({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <CustomText>Height</CustomText>
        <CustomText>Weight</CustomText>
        <CustomText>Age</CustomText>
        <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
          <Ionicons name="arrow-forward-circle" size={48} color={COLORS.primary} />
        </TouchableOpacity>
      </Container>
    </SafeAreaView>
  );
}

export default HeightWeightAge;
