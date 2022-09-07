import { Ionicons } from '@expo/vector-icons';
import { Button } from '@rneui/themed';
import { Input } from "@rneui/themed";
import { Formik } from 'formik';
import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FocusedStatusBar } from '../../components';
import Container from '../../components/Container';
import useStore from '../../state/Store';



function HeightWeightAge({ navigation }) {
  const state = useStore();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Formik
        initialValues={{ height: state.assessment.height, weight: state.assessment.weight, age: state.assessment.age }}
        onSubmit={values => state.setHWA(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <Container>
          <Input label='Height' value={values.height} onChangeText={handleChange('height')} onBlur={handleBlur('height')}/>
          <Input label='Weight' value={values.weight} onChangeText={handleChange('weight')} onBlur={handleBlur('weight')}/>
          <Input label='Age' value={values.age} onChangeText={handleChange('age')} onBlur={handleBlur('age')}/>
          <Button title="Submit" buttonStyle={{
                  borderWidth: 2,
                  borderRadius: 30
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
                onPress={() => {handleSubmit(); navigation.navigate('BodyFatPercentage') }}
            />
            <TouchableOpacity onPress={() => {navigation.navigate('Gender')}}>
              <Ionicons name="arrow-back-circle" size={48} navigation={navigation} />
            </TouchableOpacity>
        </Container>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default HeightWeightAge;
