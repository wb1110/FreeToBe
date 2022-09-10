import { Text } from "@rneui/themed";
import { Keyboard, SafeAreaView, TouchableWithoutFeedback, View } from 'react-native';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import CustomCheckBox from '../../components/CustomCheckBox';
import FocusedStatusBar from '../../components/FocusedStatusBar';


function FoodPreferences({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar />
        <Container>
          <Text>
            Choose all the apply. What I currently eat can be best described as…
          </Text>
          <View style={{ alignItems: "flex-start"}}>
            <CustomCheckBox title="All types of food"/>
            <CustomCheckBox title="Vegan"/>
            <CustomCheckBox title="Vegetarian"/>
            <CustomCheckBox title="Dairy Free"/>
            <CustomCheckBox title="Gluten Free"/>
            <CustomCheckBox title="Dairy + Gluten Free"/>
            <CustomCheckBox title="Pescatarian"/>
            <CustomCheckBox title="Low Carb"/>
            <CustomCheckBox title="Keto"/>
            <CustomCheckBox title="Carnivore"/>
          </View>
            <StandardButton title="Submit" onPress={() => navigation.navigate('TrackingHistory')} />
            <LArrowButton onPress={() => navigation.goBack()}/>
        </Container>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default FoodPreferences;
