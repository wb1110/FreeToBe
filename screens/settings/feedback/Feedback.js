import { Button, Input, Text, useTheme } from '@rneui/themed';
import { useFormik } from 'formik';
import { View } from 'react-native';
import * as Yup from 'yup';
import { FontAwesome } from '@expo/vector-icons';
import Mailer from 'react-native-mail';
import LArrowButton from '../../../components/Buttons/LArrowButton';

function Feedback({ navigation }) {
  const { theme } = useTheme();

  const sendEmail = (email, name, subject, feedback) => {
    Mailer.mail(
      {
        recipients: ['williamjaredbuchanan@gmail.com'],
        subject: 'Feedback Form',
        body: `Email: ${email}\nName: ${name}\nSubject: ${subject}\nFeedback: ${feedback}`,
        isHtml: true,
        // attachments: [{
        //   uri: imageUri,
        //   mimeType: 'image/jpeg',
        //   fileName: 'feedback-photo.jpg'
        // }]
      },
      (error, event) => {
        console.log(error, event);
      }
    );
  };

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
      const { email, name, subject, feedback } = formValues;
      sendEmail(email, name, subject, feedback);
    },
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.primary,
      }}
    >
      <LArrowButton onPress={() => navigation.goBack()} />
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={{
            justifyContent: 'center',
            backgroundColor: theme.colors.secondary,
            borderRadius: 25,
            padding: 16,
          }}
        >
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
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Button buttonStyle={{ borderRadius: 25 }} disabled>
              <FontAwesome name="camera" size={24} color="white" />
              <Text h4 h4Style={{ marginLeft: 12 }}>
                ADD PHOTO
              </Text>
            </Button>
            <Button buttonStyle={{ borderRadius: 25 }} disabled>
              <FontAwesome name="video-camera" size={24} color="white" />
              <Text h4 h4Style={{ marginLeft: 12 }}>
                ADD VIDEO
              </Text>
            </Button>
          </View>
        </View>
        <Button
          title="Submit"
          buttonStyle={{
            backgroundColor: theme.colors.secondary,
            width: 200,
            alignSelf: 'center',
            margin: 16,
            borderRadius: 25,
          }}
          onPress={handleSubmit}
          disabled={Object.values(errors).some(Boolean)}
        />
      </View>
    </View>
  );
}

export default Feedback;
