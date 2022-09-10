import { SafeAreaView } from 'react-native';
import { Text } from "@rneui/themed";
import FocusedStatusBar from '../../components/FocusedStatusBar';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';


function DietHistory({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <Text h4>
        When you think about your experience when it comes to dieting you most likely fit in which of these categories?
        </Text>
        <StandardButton title="Never been on a diet" onPress={() => {navigation.navigate('FoodPreferences')}} />
        <StandardButton title="Have gone through different phases in my life of eating healthy, losing weight, then returning to normal eating habits and gaining the weight back" onPress={() => alert('Need route')} />
        <StandardButton title="Eating disorder - I have a negative relationship with food" onPress={() => alert('Need route')} />
        <LArrowButton onPress={() => navigation.goBack()}/>
      </Container>
    </SafeAreaView>
  );
}

export default DietHistory;
