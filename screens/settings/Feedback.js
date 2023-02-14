import { Input, Text } from '@rneui/themed';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';

function Feedback() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    name: Yup.string().required('Name is required'),
    subject: Yup.string().required('Subject is required'),
    feedback: Yup.string().required('Feedback is required'),
  });

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } = useFormik({
    initialValues: { email: '', name: '', subject: '', feedback: '' },
    validationSchema,
    onSubmit: (formValues) => {
      console.log(formValues);
    },
  });

  return (
    <Container>
      <Input
        label="Email"
        placeholder="Email (Required)"
        value={values.email}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        errorMessage={touched.email && errors.email}
      />
      <Input
        label="Name"
        placeholder="Name (Required)"
        value={values.name}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={handleChange('name')}
        onBlur={handleBlur('name')}
        errorMessage={touched.name && errors.name}
      />
      <Input
        label="Subject"
        placeholder="Subject (Required)"
        value={values.subject}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={handleChange('subject')}
        onBlur={handleBlur('subject')}
        errorMessage={touched.subject && errors.subject}
      />
      <Input
        label="Feedback"
        placeholder="Enter your feedback here... (Required)"
        value={values.feedback}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={handleChange('feedback')}
        onBlur={handleBlur('feedback')}
        errorMessage={touched.feedback && errors.feedback}
      />
      <StandardButton
        title="Submit"
        onPress={handleSubmit}
        disabled={Object.values(errors).some(Boolean)}
      />
    </Container>
  );
}

export default Feedback;
