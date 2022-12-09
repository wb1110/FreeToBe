import { FlatList, SafeAreaView, View } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { Feather } from '@expo/vector-icons';
import MetabolicComponent from './MetabolicComponent';
import PinnedComponent from './PinnedComponent';

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

function MetabolicJournal() {
  // metabolic state needs to be created as well as async storage
  // there is no connection to the tracker or home tab at this time, but eventually the app will need to look for a correlation between the foods consumed on that day and what was recorded in the journal to provide helpful hints to the user
  const renderItem = ({ item }) => (
    <MetabolicComponent
      componentName={item.componentName}
      componentButtons={item.componentButtons}
    />
  );

  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      {/* The below section represents three pinned Metabolic Journal components that the user wants easy access to. When clicked, the component will be displayed below this section and above the metabolic journal list */}
      <View style={{ flexDirection: 'row', borderWidth: 1, marginBottom: '2%' }}>
        <PinnedComponent />
        <PinnedComponent />
        <PinnedComponent />
      </View>
      <View style={{ alignItems: 'center', width: '100%' }}>
        <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.componentID} />
      </View>
      {/* The below section is a flatlist of the array of Metabolic Journal components
            Users need to be able to reorder components in the array by pressing and dragging them to a new position
            Users need to be able to be able to add/replace a component in the pinned section
      */}
    </SafeAreaView>
  );
}

export default MetabolicJournal;
