import { SafeAreaView, View } from 'react-native';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import CustomCheckBox from '../../components/CustomCheckBox';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import TextContainer from '../../components/TextContainer';

function FoodPreferences({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <View>
        <TextContainer>
          What I currently eat can be best described as…{/* {"\n"}{"\n"}Choose all that apply.} */}
        </TextContainer>
        <View style={{ alignItems: 'flex-start' }}>
          <CustomCheckBox title="All types of food" />
          <CustomCheckBox title="Vegan" />
          <CustomCheckBox title="Vegetarian" />
          <CustomCheckBox title="Dairy Free" />
          <CustomCheckBox title="Gluten Free" />
          <CustomCheckBox title="Dairy + Gluten Free" />
          <CustomCheckBox title="Pescatarian" />
          <CustomCheckBox title="Low Carb" />
          <CustomCheckBox title="Keto" />
          <CustomCheckBox title="Carnivore" />
        </View>
        <View style={{ alignItems: 'center' }}>
          <StandardButton title="Submit" onPress={() => navigation.navigate('TrackingHistory')} />
          <LArrowButton onPress={() => navigation.goBack()} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default FoodPreferences;
