import { SafeAreaView, Text } from 'react-native';
import { FocusedStatusBar } from '../../components';
import Button from '../../components/Button';
import Container from '../../components/Container';
import CustomText from '../../components/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants';


function Gender({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <CustomText>Before we get started in order to make the best plan for you, we will need some more information.</CustomText>
        <CustomText>Gender</CustomText>
        <CustomText>Fill in the following to get started:</CustomText>
        <Button title="Female" />
        <Button title="Nonbinary" />
        <Ionicons onPress={() => navigation.navigate('Home')} name="arrow-forward-circle" size={48} color={COLORS.primary} />
      </Container>
    </SafeAreaView>
  );
}

export default Gender;
