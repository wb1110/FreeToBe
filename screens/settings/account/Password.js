import { Input, Text, useTheme } from '@rneui/themed';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import * as Yup from 'yup';
import LArrowButton from '../../../components/Buttons/LArrowButton';
import OverlayForm from '../../../components/OverlayForm';
import useAuthStore from '../../../state/AuthStore';
import SettingsContainer from '../SettingsContainer';

export default function Password({ navigation }) {
  const { theme } = useTheme();
  const { updatePassword, id } = useAuthStore();
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const validationSchema = Yup.object().shape({
    current: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Current password is required'),
    new: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('A new password is required'),
    confirm: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required')
      .oneOf([Yup.ref('new'), null], 'Passwords must match')
      .required('Confirmation password is required'),
  });

  const { handleChange, handleBlur, handleSubmit, values, errors, touched, handleReset } =
    useFormik({
      initialValues: { current: '', new: '', confirm: '' },
      validationSchema,
      onSubmit: (formValues, { resetForm }) => {
        updatePassword(id, formValues.current, formValues.new);
        toggleOverlay();
        resetForm({
          formValues: {
            current: '',
            new: '',
            confirm: '',
          },
        });
      },
    });

  useEffect(() => {
    // getEmail(id, setEmail);
  }, [id]);

  return (
    <SettingsContainer onPress={toggleOverlay}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
        <Text h4>Change Password</Text>
      </View>
      <OverlayForm
        overlayTitle="Change Password"
        visible={visible}
        setVisible={setVisible}
        handleReset={handleReset}
        handleSubmit={handleSubmit}
      >
        <Input
          placeholder="Current Password"
          secureTextEntry
          value={values.current}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={handleChange('current')}
          onBlur={handleBlur('current')}
          errorMessage={touched.current && errors.current}
        />
        <Input
          placeholder="New Password"
          secureTextEntry
          value={values.new}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={handleChange('new')}
          onBlur={handleBlur('new')}
          errorMessage={touched.new && errors.new}
        />
        <Input
          placeholder="Confirm Password"
          secureTextEntry
          value={values.confirm}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={handleChange('confirm')}
          onBlur={handleBlur('confirm')}
          errorMessage={touched.confirm && errors.confirm}
        />
      </OverlayForm>
    </SettingsContainer>
  );
}
