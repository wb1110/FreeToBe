import { Input, Text } from '@rneui/themed';
import { useFormik } from 'formik';
import { Image } from 'react-native';
import * as Yup from 'yup';
import ftbnBigLogo from '../assets/icons/ftbnBigLogo.png';
import StandardButton from './Buttons/StandardButton';

function LogoTitle() {
  return <Image source={ftbnBigLogo} />;
}

function AuthForm({ submitValues, submitButtonText, errorMessage }) {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit: (formValues) => {
      submitValues(formValues);
    },
  });

  return (
    <>
      <LogoTitle />
      <Input
        label="Email"
        placeholder="Enter email"
        value={values.email}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        errorMessage={touched.email && errors.email}
      />
      <Input
        label="Password"
        placeholder="Enter password"
        value={values.password}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        errorMessage={touched.password && errors.password}
        secureTextEntry
      />
      <StandardButton title={submitButtonText} onPress={handleSubmit} />
      <Text>{errorMessage}</Text>
    </>
  );
}

export default AuthForm;
