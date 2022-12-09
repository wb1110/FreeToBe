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
];

export default data;
