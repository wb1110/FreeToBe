import { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import CustomCheckBox from '../../components/CustomCheckBox';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import TextContainer from '../../components/TextContainer';

function FoodPreferences({ navigation }) {
  const [all, setAll] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [dairyFree, setDairyFree] = useState(false);
  const [glutenFree, setGlutenFree] = useState(false);
  const [dairyGlutenFree, setDairyGlutenFree] = useState(false);
  const [pescatarian, setPescatarian] = useState(false);
  const [lowcarb, setLowcarb] = useState(false);
  const [keto, setKeto] = useState(false);
  const [carnivore, setCarnivore] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <View>
        <TextContainer>
          What I currently eat can be best described as…{/* {"\n"}{"\n"}Choose all that apply.} */}
        </TextContainer>
        <View style={{ alignItems: 'center' }}>
          <CustomCheckBox title="All types of food" state={all} setState={setAll} />
          <CustomCheckBox title="Vegan" state={vegan} setState={setVegan} />
          <CustomCheckBox title="Vegetarian" state={vegetarian} setState={setVegetarian} />
          <CustomCheckBox title="Dairy Free" state={dairyFree} setState={setDairyFree} />
          <CustomCheckBox title="Gluten Free" state={glutenFree} setState={setGlutenFree} />
          <CustomCheckBox
            title="Dairy + Gluten Free"
            state={dairyGlutenFree}
            setState={setDairyGlutenFree}
          />
          <CustomCheckBox title="Pescatarian" state={pescatarian} setState={setPescatarian} />
          <CustomCheckBox title="Low Carb" state={lowcarb} setState={setLowcarb} />
          <CustomCheckBox title="Keto" state={keto} setState={setKeto} />
          <CustomCheckBox title="Carnivore" state={carnivore} setState={setCarnivore} />
        </View>
        <View style={{ alignItems: 'center' }}>
          {all ||
          vegan ||
          vegetarian ||
          dairyFree ||
          glutenFree ||
          dairyGlutenFree ||
          pescatarian ||
          lowcarb ||
          keto ||
          carnivore ? (
            <StandardButton title="Submit" onPress={() => navigation.navigate('TrackingHistory')} />
          ) : (
            <StandardButton title="Submit" disabled />
          )}

          <LArrowButton onPress={() => navigation.goBack()} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default FoodPreferences;
