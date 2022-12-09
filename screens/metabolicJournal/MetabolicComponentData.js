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
  {
    componentID: uuidv4(),
    componentName: 'Period',
    periodCalendar: true,
    componentSubSection1: {
      sectionTitle: 'Symptoms',
      sectionButtons: [
        {
          buttonTitle: 'Everything is fine',
          buttonIcon: <Feather name="sunrise" size={24} color="black" />,
          buttonColor: 'pink',
        },
        {
          buttonTitle: 'Cramps',
          buttonIcon: <Feather name="sunrise" size={24} color="black" />,
          buttonColor: 'pink',
        },
        {
          buttonTitle: 'Bloating',
          buttonIcon: <Feather name="sunrise" size={24} color="black" />,
          buttonColor: 'pink',
        },

        {
          buttonTitle: 'High pain',
          buttonIcon: <Feather name="sunrise" size={24} color="black" />,
          buttonColor: 'pink',
        },

        {
          buttonTitle: 'Tender breasts',
          buttonIcon: <Feather name="sunrise" size={24} color="black" />,
          buttonColor: 'pink',
        },

        {
          buttonTitle: 'Head ache',
          buttonIcon: <Feather name="sunrise" size={24} color="black" />,
          buttonColor: 'pink',
        },
        {
          buttonTitle: 'Back ache',
          buttonIcon: <Feather name="sunrise" size={24} color="black" />,
          buttonColor: 'pink',
        },
        {
          buttonTitle: 'Nausea',
          buttonIcon: <Feather name="sunrise" size={24} color="black" />,
          buttonColor: 'pink',
        },
        {
          buttonTitle: 'Fatigue',
          buttonIcon: <Feather name="sunrise" size={24} color="black" />,
          buttonColor: 'pink',
        },
        {
          buttonTitle: 'Cravings',
          buttonIcon: <Feather name="sunrise" size={24} color="black" />,
          buttonColor: 'pink',
        },
      ],
    },
    componentSubSection2: {
      sectionTitle: 'Menstrual flow',
      sectionButtons: [
        {
          buttonTitle: 'Light',
          buttonIcon: <Feather name="sunrise" size={24} color="black" />,
          buttonColor: 'pink',
        },
        {
          buttonTitle: 'Medium',
          buttonIcon: <Feather name="sunrise" size={24} color="black" />,
          buttonColor: 'pink',
        },
        {
          buttonTitle: 'Heavy',
          buttonIcon: <Feather name="sunrise" size={24} color="black" />,
          buttonColor: 'pink',
        },
      ],
    },
  },
  {
    componentID: uuidv4(),
    componentName: 'Fertility',
    componentSubSection1: {
      sectionTitle: 'Pregnancy Test',
      sectionButtons: [
        {
          buttonTitle: 'Did not take a test',
          buttonIcon: <Feather name="sunrise" size={24} color="white" />,
          buttonColor: 'purple',
        },
        {
          buttonTitle: 'Positive',
          buttonIcon: <Feather name="sunrise" size={24} color="white" />,
          buttonColor: 'purple',
        },
        {
          buttonTitle: 'Faint line',
          buttonIcon: <Feather name="sunrise" size={24} color="white" />,
          buttonColor: 'purple',
        },

        {
          buttonTitle: 'Negative',
          buttonIcon: <Feather name="sunrise" size={24} color="white" />,
          buttonColor: 'purple',
        },
      ],
    },
    componentSubSection2: {
      sectionTitle: 'Ovulation',
      sectionButtons: [
        {
          buttonTitle: 'Did not take a test',
          buttonIcon: <Feather name="sunrise" size={24} color="white" />,
          buttonColor: 'purple',
        },
        {
          buttonTitle: 'Test positive',
          buttonIcon: <Feather name="sunrise" size={24} color="white" />,
          buttonColor: 'purple',
        },
        {
          buttonTitle: 'Test negative',
          buttonIcon: <Feather name="sunrise" size={24} color="white" />,
          buttonColor: 'purple',
        },
        {
          buttonTitle: 'My own method',
          buttonIcon: <Feather name="sunrise" size={24} color="white" />,
          buttonColor: 'purple',
        },
      ],
    },
  },
  {
    componentID: uuidv4(),
    componentName: 'Physical Activity',
    componentButtons: [
      {
        buttonTitle: 'Did not exercise',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'orange',
      },
      {
        buttonTitle: 'Weight training',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'orange',
      },
      {
        buttonTitle: 'Aerobic / Dancing',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'orange',
      },
      {
        buttonTitle: 'Walk',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'orange',
      },
      {
        buttonTitle: 'Running',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'orange',
      },
      {
        buttonTitle: 'Yoga',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'orange',
      },
      {
        buttonTitle: 'Cycling',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'orange',
      },
      {
        buttonTitle: 'Team sports',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'orange',
      },
      {
        buttonTitle: 'Swimming',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'orange',
      },
      {
        buttonTitle: 'Pilates',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'orange',
      },
    ],
  },
  {
    componentID: uuidv4(),
    componentName: 'Skin',
    componentButtons: [
      {
        buttonTitle: 'Healthy glow',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'brown',
      },
      {
        buttonTitle: 'Irritated',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'brown',
      },
      {
        buttonTitle: 'Red spots',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'brown',
      },
      {
        buttonTitle: 'Itchy',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'brown',
      },
      {
        buttonTitle: 'Dry',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'brown',
      },
      {
        buttonTitle: 'Oily',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'brown',
      },
    ],
    componentPhoto: true
  },
  {
    componentID: uuidv4(),
    componentName: 'Hair',
    componentButtons: [
      {
        buttonTitle: 'Vibrant',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'teal',
      },
      {
        buttonTitle: 'Dull',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'teal',
      },
      {
        buttonTitle: 'Oily',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'teal',
      },
      {
        buttonTitle: 'Dry',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'teal',
      },
      {
        buttonTitle: 'Brittle',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'teal',
      },
      {
        buttonTitle: 'Losing hair',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'teal',
      },
      {
        buttonTitle: 'Growing hair',
        buttonIcon: <Feather name="sunrise" size={24} color="white" />,
        buttonColor: 'teal',
      },
    ],
    componentPhoto: true
  },
  {
    componentID: uuidv4(),
    componentName: 'Nails',
    componentButtons: [
      {
        buttonTitle: 'Strong',
        buttonIcon: <Feather name="sunrise" size={24} color="black" />,
        buttonColor: 'white',
      },
      {
        buttonTitle: 'Brittle',
        buttonIcon: <Feather name="sunrise" size={24} color="black" />,
        buttonColor: 'white',
      },
      {
        buttonTitle: 'Calcium spots',
        buttonIcon: <Feather name="sunrise" size={24} color="black" />,
        buttonColor: 'white',
      },
    ],
    componentPhoto: true
  },
];

export default data;
