import { SafeAreaView, Text, TextInput, View } from 'react-native';
import { Input } from "@rneui/themed";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from '@rneui/base';
import { FocusedStatusBar } from '../../components';
import Container from '../../components/Container';
import { COLORS } from '../../constants/theme';
import useStore from '../../state/Store';
import { Formik } from 'formik';


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
                  backgroundColor: COLORS.primary,
                  borderWidth: 2,
                  borderColor: COLORS.primary,
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
                < Ionicons name="arrow-back-circle" size={48} color={COLORS.primary} navigation={navigation} />
              </TouchableOpacity>
          </Container>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default BodyFatKnown;
