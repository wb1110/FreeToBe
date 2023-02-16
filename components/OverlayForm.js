import { Button, Overlay, Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';

export default function OverlayForm({
  overlayTitle,
  visible,
  setVisible,
  children,
  handleReset,
  handleSubmit,
}) {
  const { theme } = useTheme();

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  // const validationSchema = Yup.object().shape({
  //   email: Yup.string().email('Invalid email').required('Email is required'),
  //   confirmEmail: Yup.string()
  //     .email('Invalid email')
  //     .oneOf([Yup.ref('email'), null], 'Emails must match')
  //     .required('Email is required'),
  // });

  // const { handleChange, handleBlur, handleSubmit, values, errors, touched, handleReset } =
  //   useFormik({
  //     initialValues: { email: '', confirmEmail: '' },
  //     validationSchema,
  //     onSubmit: (formValues, { resetForm }) => {
  //       toggleOverlay();
  //       resetForm({
  //         formValues: {
  //           email: '',
  //           confirmEmail: '',
  //         },
  //       });
  //     },
  //   });

  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={toggleOverlay}
      overlayStyle={{ width: '90%', backgroundColor: theme.colors.secondary }}
    >
      <Text h4>{overlayTitle}</Text>
      <View style={{ marginTop: 16 }}>
        {children}
        {/* <Input
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
        /> */}
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Button
          type="clear"
          title="CANCEL"
          onPress={() => {
            toggleOverlay();
            handleReset();
          }}
        />
        <Button
          type="clear"
          title="SAVE"
          titleStyle={{ color: theme.colors.white }}
          onPress={handleSubmit}
        />
      </View>
    </Overlay>
  );
}
