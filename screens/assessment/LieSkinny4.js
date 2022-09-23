import { SafeAreaView, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LArrowButton from '../../components/Buttons/LArrowButton';
import RArrowButton from '../../components/Buttons/RArrowButton';
import Container from '../../components/Container';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import TextContainer from '../../components/TextContainer';
import useStore from '../../state/Store';

function LieSkinny4({ navigation }) {
  const state = useStore();

  // eslint-disable-next-line consistent-return
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('assessment', jsonValue);
    } catch (e) {
      // saving error
      return e;
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <TextContainer>
            Women eat anywhere from 1 to 7 meals a day.
            {'\n'}
            {'\n'}
            While you are tracking these three days, fill in the times and the amounts of meals you
            ate that day. Only fill in the meals you eat, there is no need to fill in all 7 meals.
            {'\n'}
            {'\n'}
            Currently, we are just getting a baseline of where to start you in your nutrition
            journey.
            {'\n'}
            {'\n'}
            At the top of the page you will see three macronutrients and your calories you consumed
            for the day. For the purpose of these 3 days, it will only count up from 0 to show you
            what you ate for the day.
            {'\n'}
            {'\n'}
            After the 3 days, it will show your goals for each macronutrients and fill in the circle
            underneath according to how many more grams you need to consume to meet your goals.
          </TextContainer>
        </ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <LArrowButton onPress={() => navigation.goBack()} />
          <RArrowButton
            title="Let's Get Started"
            onPress={() => {
              navigation.navigate('UserHome');
              storeData(state.assessment);
            }}
          />
        </View>
      </Container>
    </SafeAreaView>
  );
}

export default LieSkinny4;
