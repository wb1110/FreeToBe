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
            While you are tracking these three days, fill in the times and the number of meals you
            ate that day. Only fill in the meals you eat. (There is no need to fill in all 7 meals.)
            {'\n'}
            {'\n'}
            Remember, we are just getting a baseline of where to start you in your nutrition
            journey. Accurate tracking is important to help you improve during this process.
            {'\n'}
            {'\n'}
            At the top of the page, you will see three macronutrients and the calories you consumed
            for the day. For the purpose of these 3 days, the tracker will count up from 0 to show
            what you ate for the day.
            {'\n'}
            {'\n'}
            After these 3 days, the tracker will display your goals for each macronutrient and show
            you in real time how many grams you have left to consume for the day to meet your goals.
          </TextContainer>
        </ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <LArrowButton onPress={() => navigation.goBack()} />
          <RArrowButton
            title="Let's Get Started"
            onPress={() => {
              navigation.navigate('UserHome', { screen: 'Tracker' });
              storeData(state.assessment);
            }}
          />
        </View>
      </Container>
    </SafeAreaView>
  );
}

export default LieSkinny4;
