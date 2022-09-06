import { SafeAreaView, TextInput, View } from 'react-native';
import { Input } from "@rneui/themed";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from '@rneui/base';
import { FocusedStatusBar } from '../../components';
import Container from '../../components/Container';
import { COLORS } from '../../constants/theme';
import useStore from '../../state/Store';
import { Formik } from 'formik';



function HeightWeightAge({ navigation }) {
  const state = useStore();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Formik
        initialValues={{ height: state.assessment.height, weight: '', age: '' }}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <Container>
          <Input label='Height' value={values.height} onChangeText={handleChange('height')} onBlur={handleBlur('height')}/>
          <Input label='Weight' />
          <Input label='Age' />
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
                onPress={() => {handleSubmit; state.setHeight(values.height); navigation.navigate('BodyFatPercentage') }}
            />
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => {navigation.navigate('Gender')}}>
              <Ionicons name="arrow-back-circle" size={48} color={COLORS.primary} navigation={navigation} />
            </TouchableOpacity>
          </View>
        </Container>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default HeightWeightAge;
