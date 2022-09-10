import { Input, Overlay, ListItem, Text } from "@rneui/themed";
import { Formik } from 'formik';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard, FlatList } from 'react-native';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import useStore from '../../state/Store';
import { useState } from "react";
import { color } from "@rneui/base";



function HeightWeightAge({ navigation }) {
  const state = useStore();
  const [visible, setVisible] = useState(false);

  const heightList = [
    "4", "4'1", "4'2", "4'3", "4'4", "4'5", "4'6", "4'7", "4'8", "4'9", "4'10", "4'11", 
    "5", "5'1", "5'2", "5'3", "5'4", "5'5", "5'6", "5'7", "5'8", "5'9", "5'10", "5'11", 
    "6", "6'1", "6'2", "6'3", "6'4", "6'5", "6'6", "6'7", "6'8", "6'9", "6'10", "6'11", 
    "7", "7'1", "7'2", "7'3", "7'4", "7'5", "7'6", "7'7", "7'8", "7'9", "7'10", "7'11", 
  ]
  
  const keyExtractor = (item, index) => index.toString();
  
  const renderItem = ({ item }) =>(
    <ListItem>
      <ListItem.Content>
        <ListItem.Title>{item}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  )

  const toggleOverlay = () => {
    setVisible(!visible);
  }

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
            <StandardButton title="Height" onPress={toggleOverlay} />
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{ backgroundColor: 'transparent' }}>
              <FlatList keyExtractor={keyExtractor} data={heightList} renderItem={renderItem} />
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
