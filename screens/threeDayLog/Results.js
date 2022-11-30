import { Button } from '@rneui/themed';
import { useState } from 'react';
import { View } from 'react-native';
import LArrowButton from '../../components/Buttons/LArrowButton';
import RArrowButton from '../../components/Buttons/RArrowButton';
import { SelectedButton } from '../../components/Buttons/StandardButtonSelected';
import Container from '../../components/Container';
import TextContainer from '../../components/TextContainer';

export function Results1({ navigation }) {
  return (
    <Container>
      <TextContainer>
        Congratulations on commiting to improving your health by sticking with the 3 days of eating
        log!
      </TextContainer>
      <View style={{ flexDirection: 'row' }}>
        <LArrowButton onPress={() => navigation.goBack()} />
        <RArrowButton title="Submit" onPress={() => navigation.navigate('Results2')} />
      </View>
    </Container>
  );
}

export function Results2({ navigation }) {
  const [selected, setSelected] = useState(0);

  return (
    <Container>
      <TextContainer>
        To determine your best plan of action, we need to know how your body is reacting currently
        to what you are eating. {'\n'}
        {'\n'}Currently, with the way I am eating I am...
      </TextContainer>
      <SelectedButton title="Losing weight" selected={selected} setSelected={setSelected} />
      <SelectedButton title="Maintaining weight" selected={selected} setSelected={setSelected} />
      <SelectedButton title="Gaining weight" selected={selected} setSelected={setSelected} />
      <View style={{ flexDirection: 'row' }}>
        <LArrowButton onPress={() => navigation.goBack()} />
        <RArrowButton title="Submit" onPress={() => navigation.navigate('Results3')} />
      </View>
    </Container>
  );
}

export function Results3({ navigation }) {
  return (
    <Container>
      <View>
        <TextContainer>
          Awesome job completing your 3 day assessment! Based on your questionnare, your ideal Total
          Daily Energy Expended nees are
        </TextContainer>
        {/* <TextContainer>{`${idealCalories}`} Calories = {`${idealProtein}`} Protein 30% {`${idealFat}`} Fat 30% {`${idealCarbs}`} Carbs 40%</TextContainer> */}
      </View>
      <View>
        <TextContainer>
          Based on your 3 days eating journal you have been eating an average of
        </TextContainer>
        {/* <TextContainer>{`${loggedCalories}`} Calories = {`${loggedProtein}`} Protein {`${proteinPercentage}%`} {`${loggedFat}`} Fat {`${fatPercentage}%`} {`${loggedCarbs}`} Carbs {`${carbPercentage}%`}</TextContainer> */}
      </View>
      <View style={{ flexDirection: 'row' }}>
        <LArrowButton onPress={() => navigation.goBack()} />
        <RArrowButton title="Submit" onPress={() => navigation.navigate('Results4')} />
      </View>
    </Container>
  );
}

export function Results4({ navigation }) {
  return (
    <Container>
      <View>
        <TextContainer>
          In order to properly nourish your body, we will be creating weekly goals to make the best
          lifelong lasting change! {'\n'}
          {'\n'}
          Starting this first week, we will increase your protein intake to try to get closer to
          your body&aposs needs. {'\n'}
          {'\n'}
          This weeks calorie/macro goals:
        </TextContainer>
      </View>
      <View>
        {/* <TextContainer>{`${goalCalories}`} Calories = {`${goalProtein}`} Protein {`${goalProteinPercentage}%`} {`${goalFat}`} Fat {`${goalFatPercentage}%`} {`${goalCarbs}`} Carbs {`${goalCarbPercentage}%`}</TextContainer> */}
      </View>
      <View style={{ flexDirection: 'row' }}>
        <LArrowButton onPress={() => navigation.goBack()} />
        <RArrowButton title="Submit" onPress={() => navigation.navigate('Results5')} />
      </View>
    </Container>
  );
}

export function Results5({ navigation }) {
  return (
    <Container>
      <View>
        <TextContainer>
          Based on your 3 days of tracking, it looks like you usually eat 3 meals a day. We have
          generated 3 different lifestyle goals for you to choose form to be succesful this week.
          {'\n'}
          {'\n'}I want my goal to be...
        </TextContainer>
      </View>
      <View>
        <Button title="Eat 4 meals a day" />
        <Button title="Eat between 15-20g of protein at each meal" />
        <Button title="Make sure I have a protein at every meal" />
        <Button title="Create my own goal" />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <LArrowButton onPress={() => navigation.goBack()} />
        <RArrowButton title="Submit" onPress={() => navigation.navigate('Results6')} />
      </View>
    </Container>
  );
}

export function Results6({ navigation }) {
  return (
    <Container>
      <View>
        <TextContainer>
          Remeber that these are just guidelines
          {'\n'}
          {'\n'}
          Calories and macros are just numbers. Making lifestyle changes focuses on small goals that
          over time create healthy habits.
          {'\n'}
          {'\n'}
          Do your best to focus on the goal you chose. Leave the rest up to us!
        </TextContainer>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <LArrowButton onPress={() => navigation.goBack()} />
        <RArrowButton
          title="Submit"
          onPress={() => navigation.navigate('UserHome', { screen: 'Home' })}
        />
      </View>
    </Container>
  );
}
