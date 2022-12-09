import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { Feather } from '@expo/vector-icons';

const data = [
  {
    componentID: uuidv4(),
    componentName: 'Temperatures',
    componentButtons: [
      {
        buttonTitle: 'Waking Temp',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'blue',
      },
      {
        buttonTitle: 'Pre-meal Temp',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'blue',
      },
      {
        buttonTitle: 'Post-meal Temp',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'blue',
      },
    ],
  },
  {
    componentID: uuidv4(),
    componentName: 'Pulse',
    componentButtons: null,
    componentInput: true,
  },
  {
    componentID: uuidv4(),
    componentName: 'Mood',
    componentButtons: [
      {
        buttonTitle: 'Calm',
        buttonIcon: <Feather name="sunrise" size={24} color="black" />,
        buttonColor: 'yellow',
      },
      {
        buttonTitle: 'Happy',
        buttonIcon: <Feather name="sunrise" size={24} color="black" />,
        buttonColor: 'yellow',
      },
      {
        buttonTitle: 'Energetic',
        buttonIcon: <Feather name="sunrise" size={24} color="black" />,
        buttonColor: 'yellow',
      },
      {
        buttonTitle: 'Mood Swings',
        buttonIcon: <Feather name="sunrise" size={24} color="black" />,
        buttonColor: 'yellow',
      },
      {
        buttonTitle: 'Sad',
        buttonIcon: <Feather name="sunrise" size={24} color="black" />,
        buttonColor: 'yellow',
      },
      {
        buttonTitle: 'Irritated',
        buttonIcon: <Feather name="sunrise" size={24} color="black" />,
        buttonColor: 'yellow',
      },
      {
        buttonTitle: 'Anxious',
        buttonIcon: <Feather name="sunrise" size={24} color="black" />,
        buttonColor: 'yellow',
      },
      {
        buttonTitle: 'Depressed',
        buttonIcon: <Feather name="sunrise" size={24} color="black" />,
        buttonColor: 'yellow',
      },
      {
        buttonTitle: 'Guilty',
        buttonIcon: <Feather name="sunrise" size={24} color="black" />,
        buttonColor: 'yellow',
      },
      {
        buttonTitle: 'Apathetic',
        buttonIcon: <Feather name="sunrise" size={24} color="black" />,
        buttonColor: 'yellow',
      },
      {
        buttonTitle: 'Confused',
        buttonIcon: <Feather name="sunrise" size={24} color="black" />,
        buttonColor: 'yellow',
      },
      {
        buttonTitle: 'Self-critical',
        buttonIcon: <Feather name="sunrise" size={24} color="black" />,
        buttonColor: 'yellow',
      },
    ],
  },
  {
    componentID: uuidv4(),
    componentName: 'Sex and Sex Drive',
    componentButtons: [
      {
        buttonTitle: 'Did not have sex',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'red',
      },
      {
        buttonTitle: 'Protected sex',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'red',
      },
      {
        buttonTitle: 'Unprotected sex',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'red',
      },

      {
        buttonTitle: 'Masturbation',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'red',
      },

      {
        buttonTitle: 'High sex drive',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'red',
      },

      {
        buttonTitle: 'Low sex drive',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'red',
      },
      {
        buttonTitle: 'No sex drive',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'red',
      },
    ],
  },
  {
    componentID: uuidv4(),
    componentName: 'Bowel movements',
    componentInput: true,
    componentButtons: [
      {
        buttonTitle: 'Healthy',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'green',
      },
      {
        buttonTitle: 'Constipated',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'green',
      },
      {
        buttonTitle: 'Diarrea',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'green',
      },
    ],
  },
];

export default data;
