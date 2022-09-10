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
import RoundButton from "../../components/Buttons/RoundButton";

const heightFt = [
  {height: "4ft"}, 
  {height: "5ft"}, 
  {height: "6ft"},
  {height: "7ft"}, 
]

const heightIn = [
  {height: "1in"}, 
  {height: "2in"}, 
  {height: "3in"},
  {height: "4in"}, 
  {height: "5in"}, 
  {height: "6in"}, 
  {height: "7in"},
  {height: "8in"}, 
  {height: "9in"}, 
  {height: "10in"}, 
  {height: "11in"},
]

const Item = ({ item, onPress }) =>(
  <TouchableOpacity onPress={onPress}>
    <Text h1 h1Style={{ color: 'white' }}>{item}</Text>
  </TouchableOpacity>
);

function HeightWeightAge({ navigation }) {
  const state = useStore();
  // const [visible, setVisible] = useState(false);
  // const [height, setHeight] = useState('');

  // const renderItem = ({ item }) => (
  //   <Item item={item.height} />
  // );

  // const toggleOverlay = () => {
  //   setVisible(!visible);
  // };

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
            <Input label='Height' value={values.height} onChangeText={handleChange('height')} onBlur={handleBlur('height')}/>
            {/* <StandardButton title={`Height ${height}`} onPress={toggleOverlay} value={values.height}/>
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{ backgroundColor: 'transparent' }}>
              <View style={{ height: '50%', marginTop: '10%', flexDirection: 'row', alignItems: 'center' }}>
                <FlatList keyExtractor={item => item.height} data={heightFt} renderItem={renderItem} />
                <FlatList keyExtractor={item => item.height} data={heightIn} renderItem={renderItem} />
              </View>
              <StandardButton title='Submit' onPress={toggleOverlay}/>
            </Overlay> */}
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
