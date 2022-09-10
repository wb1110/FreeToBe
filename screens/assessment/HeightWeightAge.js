import { Input, Overlay, ListItem, Text } from "@rneui/themed";
import { Formik } from 'formik';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard, FlatList, View } from 'react-native';
import { useState } from "react";
import FocusedStatusBar from '../../components/FocusedStatusBar';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import useStore from '../../state/Store';
import { TouchableOpacity } from "react-native-gesture-handler";

const heightList = [
  {height: "4'0"}, 
  {height: "4'1"}, 
  {height: "4'2"},
  {height: "4'3"}, 
  {height: "4'4"}, 
  {height: "4'5"},
  {height: "4'6"}, 
  {height: "4'7"}, 
  {height: "4'8"},
  {height: "4'9"}, 
  {height: "4'10"}, 
  {height: "4'11"},
  {height: "5'0"}, 
  {height: "5'1"}, 
  {height: "5'2"},
  {height: "5'3"}, 
  {height: "5'4"}, 
  {height: "5'5"},
  {height: "5'6"}, 
  {height: "5'7"}, 
  {height: "5'8"},
  {height: "5'9"}, 
  {height: "5'10"}, 
  {height: "5'11"},
  {height: "6'0"}, 
  {height: "6'1"}, 
  {height: "6'2"},
  {height: "6'3"}, 
  {height: "6'4"}, 
  {height: "6'5"},
  {height: "6'6"}, 
  {height: "6'7"}, 
  {height: "6'8"},
  {height: "6'9"}, 
  {height: "6'10"}, 
  {height: "6'11"},
  {height: "7'0"}, 
  {height: "7'1"}, 
  {height: "7'2"},
  {height: "7'3"}, 
  {height: "7'4"}, 
  {height: "7'5"},
  {height: "7'6"}, 
  {height: "7'7"}, 
  {height: "7'8"},
  {height: "7'9"}, 
  {height: "7'10"}, 
  {height: "7'11"},
]

const Item = ({ item, onPress }) =>(
  <TouchableOpacity onPress={onPress}>
    <Text h1 h1Style={{ color: 'white' }}>{item}</Text>
  </TouchableOpacity>
);

function HeightWeightAge({ navigation }) {
  const state = useStore();
  const [visible, setVisible] = useState(false);
  const [height, setHeight] = useState('');

  const renderItem = ({ item }) => (
    <Item item={item.height} onPress={() => {setHeight(item.height); toggleOverlay()}}/>
  );

  // const heightList = [
  //   "4", "4'1", "4'2", "4'3", "4'4", "4'5", "4'6", "4'7", "4'8", "4'9", "4'10", "4'11", 
  //   "5", "5'1", "5'2", "5'3", "5'4", "5'5", "5'6", "5'7", "5'8", "5'9", "5'10", "5'11", 
  //   "6", "6'1", "6'2", "6'3", "6'4", "6'5", "6'6", "6'7", "6'8", "6'9", "6'10", "6'11", 
  //   "7", "7'1", "7'2", "7'3", "7'4", "7'5", "7'6", "7'7", "7'8", "7'9", "7'10", "7'11", 
  // ]

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar />
        <Formik
          initialValues={{ height: state.assessment.height, weight: state.assessment.weight, age: state.assessment.age }}
          onSubmit={values => state.setHWA(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
          <Container>
            <StandardButton title={`Height ${height}`} onPress={toggleOverlay} value={values.height}/>
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{ backgroundColor: 'transparent' }}>
              <View style={{ height: '85%', marginTop: '10%' }}>
                <FlatList keyExtractor={item => item.height} data={heightList} renderItem={renderItem} />
              </View>
            </Overlay>
            <Input label='Weight' value={values.weight} onChangeText={handleChange('weight')} onBlur={handleBlur('weight')}/>
            <Input label='Age' value={values.age} onChangeText={handleChange('age')} onBlur={handleBlur('age')}/>
            <StandardButton title="Submit" onPress={() => {handleSubmit(); navigation.navigate('BodyFatPercentage') }}/>
            <LArrowButton onPress={() => navigation.goBack()}/>
          </Container>
          )}
        </Formik>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default HeightWeightAge;
