import { SafeAreaView, TextInput } from 'react-native';
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
        <TextInput style={{ height: 40, width: 40, margin: 12, borderWidth: 1, padding: 10 }} />
        <CustomText>Weight</CustomText>
        <CustomText>Age</CustomText>
        <ArrowRight navigation={navigation} />
      </Container>
    </SafeAreaView>
  );
}

export default HeightWeightAge;
