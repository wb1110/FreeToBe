import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { SafeAreaView, Text } from 'react-native';
import { FocusedStatusBar } from '../../components';
import Button from '../../components/Button';
import Container from '../../components/Container';
import CustomText from '../../components/CustomText';


function Gender({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <CustomText>Before we get started in order to make the best plan for you, we will need some more information.</CustomText>
        <CustomText>Gender</CustomText>
        <CustomText>Fill in the following to get started:</CustomText>
        <Text>
          <Button title="Female" />
          <Button title="Nonbinary" />
        </Text>
        <Button onPress={() => navigation.navigate('Home')} title="Submit" />
        <FontAwesomeIcon />
      </Container>
    </SafeAreaView>
  );
}

export default Gender;
