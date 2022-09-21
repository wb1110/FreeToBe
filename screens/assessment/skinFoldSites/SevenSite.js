import { Input } from '@rneui/themed';
import { Formik } from 'formik';
import { View } from 'react-native';
import StandardButton from '../../../components/Buttons/StandardButton';
import useStore from '../../../state/Store';

function SevenSite({ navigation }) {
  const state = useStore();
  const bodyFat = (sum, age) => {
    const bodyDensity = 1.097 - 0.00046971 * sum + 0.00000056 * sum ** 2 - 0.00012828 * age;
    const result = 495 / bodyDensity - 450;
    return result;
  };

  return (
    <Formik
      initialValues={{
        abdominal: state.assessment.abdominal,
        triceps: state.assessment.triceps,
        suprailiac: state.assessment.suprailiac,
        thigh: state.assessment.thigh,
        chest: state.assessment.chest,
        midaxillary: state.assessment.midaxillary,
        subscapular: state.assessment.subscapular,
        bodyFat: state.assessment.bodyFat,
      }}
      onSubmit={(values) => {
        const recurranceValue = { ...values };
        recurranceValue.bodyFat = bodyFat(
          +values.abdominal +
            +values.triceps +
            +values.suprailiac +
            +values.thigh +
            +values.chest +
            +values.midaxillary +
            +values.subscapular,
          state.assessment.age
        );
        state.setBodyFat(recurranceValue);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={{ alignItems: 'center' }}>
          <View
            style={{ width: '100%', flex: 1, flexGrow: 1, flexDirection: 'row', marginTop: '20%' }}
          >
            <View style={{ flex: 1, flexGrow: 1 }}>
              <Input
                label="Abdominal"
                onChangeText={handleChange('abdominal')}
                onBlur={handleBlur('abdominal')}
                value={values.abdominal}
              />
              <Input
                label="Triceps"
                onChangeText={handleChange('triceps')}
                onBlur={handleBlur('triceps')}
                value={values.triceps}
              />
              <Input
                label="Suprailiac"
                onChangeText={handleChange('suprailiac')}
                onBlur={handleBlur('suprailiac')}
                value={values.suprailiac}
              />
              <Input
                label="Thigh"
                onChangeText={handleChange('thigh')}
                onBlur={handleBlur('thigh')}
                value={values.thigh}
              />
            </View>
            <View style={{ flex: 1, flexGrow: 1 }}>
              <Input
                label="Chest"
                onChangeText={handleChange('chest')}
                onBlur={handleBlur('chest')}
                value={values.chest}
              />
              <Input
                label="Midaxillary"
                onChangeText={handleChange('midaxillary')}
                onBlur={handleBlur('midaxillary')}
                value={values.midaxillary}
              />
              <Input
                label="Subscapular"
                onChangeText={handleChange('subscapular')}
                onBlur={handleBlur('subscapular')}
                value={values.subscapular}
              />
            </View>
          </View>
          <StandardButton
            title="Submit"
            onPress={() => {
              navigation.navigate('Pregnant');
              handleSubmit();
            }}
          />
        </View>
      )}
    </Formik>
  );
}

export default SevenSite;
