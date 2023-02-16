import { Input, Text, useTheme } from '@rneui/themed';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import * as Yup from 'yup';
import LArrowButton from '../../../components/Buttons/LArrowButton';
import OverlayForm from '../../../components/OverlayForm';
import useAuthStore from '../../../state/AuthStore';
import SettingsContainer from '../SettingsContainer';

export default function Email({ navigation }) {
  const { theme } = useTheme();
  const { getEmail, updateEmail, id } = useAuthStore();
  const [email, setEmail] = useState('');
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    confirmEmail: Yup.string()
      .email('Invalid email')
      .oneOf([Yup.ref('email'), null], 'Emails must match')
      .required('Email is required'),
  });

  const { handleChange, handleBlur, handleSubmit, values, errors, touched, handleReset } =
    useFormik({
      initialValues: { email: '', confirmEmail: '' },
      validationSchema,
      onSubmit: (formValues, { resetForm }) => {
        updateEmail(id, formValues.email, setEmail);
        toggleOverlay();
        resetForm({
          formValues: {
            email: '',
            confirmEmail: '',
          },
        });
      },
    });

  useEffect(() => {
    getEmail(id, setEmail);
  }, [id]);

  return (
    <SettingsContainer onPress={toggleOverlay}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
        <Text h4>Email</Text>
        <Text h4>{email}</Text>
      </View>
      <OverlayForm
        overlayTitle="Change Email"
        visible={visible}
        setVisible={setVisible}
        handleReset={handleReset}
        handleSubmit={handleSubmit}
      >
        <Input
          placeholder="New Email"
          value={values.email}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          errorMessage={touched.email && errors.email}
        />
        <Input
          placeholder="Confirm Email"
          value={values.confirmEmail}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={handleChange('confirmEmail')}
          onBlur={handleBlur('confirmEmail')}
          errorMessage={touched.confirmEmail && errors.confirmEmail}
        />
      </OverlayForm>
    </SettingsContainer>
  );
}
