import { Ionicons } from '@expo/vector-icons';
import { Input, Button } from "@rneui/themed";
import { Formik } from 'formik';
import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FocusedStatusBar } from '../../components';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
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
            <StandardButton title="Submit" onPress={() => {handleSubmit(); navigation.navigate('Gender') }}/>
              <LArrowButton onPress={() => {navigation.navigate('BodyFatPercentage')}}/>
          </Container>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default BodyFatKnown;
