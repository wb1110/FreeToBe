import { Picker } from '@react-native-picker/picker';
import { Input, Text } from '@rneui/themed';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import * as Yup from 'yup';
import OverlayForm from '../../../components/OverlayForm';
import { storeData } from '../../../functions/Posts';
import useAuthStore from '../../../state/AuthStore';
import useStore from '../../../state/Store';
import SettingsContainer from '../SettingsContainer';

export default function BodyFat() {
  const { id } = useAuthStore();
  const { setNewBodyFat, assessment } = useStore();
  const [bf, setBf] = useState(assessment.bodyFat);
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const validationSchema = Yup.object().shape({
    bodyFat: Yup.number().required('Body fat is required'),
  });

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } = useFormik({
    initialValues: { bodyFat: assessment.bodyFat },
    validationSchema,
    onSubmit: (formValues) => {
      setNewBodyFat(id, parseFloat(formValues.bodyFat));
      toggleOverlay();
    },
  });

  return (
    <SettingsContainer onPress={toggleOverlay}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
        <Text h4>Body Fat</Text>
        <Text h4>{assessment.bodyFat > 0 ? `${assessment.bodyFat}%` : 'Unknown Body Fat'}</Text>
      </View>
      <OverlayForm
        overlayTitle="Body Fat"
        visible={visible}
        setVisible={setVisible}
        handleSubmit={handleSubmit}
        handleReset={toggleOverlay}
      >
        <Text>Update body fat (If unknown, enter 0):</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginTop: 6,
          }}
        >
          <Input
            placeholder={`${assessment.bodyFat}`}
            value={values.bodyFat}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={handleChange('bodyFat')}
            onBlur={handleBlur('bodyFat')}
            errorMessage={touched.bodyFat && errors.bodyFat}
            containerStyle={{
              width: 100,
              justifyContent: 'center',
            }}
          />
          <Text style={{ fontSize: 24, marginTop: 6 }}>%</Text>
        </View>
      </OverlayForm>
    </SettingsContainer>
  );
}
