import { Ionicons } from '@expo/vector-icons';
import { Input, Button } from "@rneui/themed";
import { Formik } from 'formik';
import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FocusedStatusBar } from '../../components';
import Container from '../../components/Container';
import useStore from '../../state/Store';


function BodyFatKnown({ navigation }) {
  const state = useStore();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Formik
        initialValues={{ bodyFat: state.assessment.bodyFat }}
        onSubmit={values => state.setBodyFat(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <Container>
            <Input 
              label='Body Fat Percentage' 
              onChangeText={handleChange('bodyFat')}
              onBlur={handleBlur('bodyFat')}
              value={values.bodyFat}
            />
            <Button title="Submit" buttonStyle={{
                  borderWidth: 2,
                  borderRadius: 30,
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
                onPress={() => {handleSubmit(); navigation.navigate('Gender') }}
            />
              <TouchableOpacity onPress={() => {navigation.navigate('BodyFatPercentage')}}>
                < Ionicons name="arrow-back-circle" size={48} navigation={navigation} />
              </TouchableOpacity>
          </Container>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default BodyFatKnown;
