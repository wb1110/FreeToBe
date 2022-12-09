import { FlatList, SafeAreaView, View } from 'react-native';
import MetabolicComponent from './MetabolicComponent';
import PinnedComponent from './PinnedComponent';
import data from './MetabolicComponentData';

function MetabolicJournal() {
  // metabolic state needs to be created as well as async storage
  // there is no connection to the tracker or home tab at this time, but eventually the app will need to look for a correlation between the foods consumed on that day and what was recorded in the journal to provide helpful hints to the user
  const renderItem = ({ item }) => (
    <MetabolicComponent
      componentName={item.componentName}
      componentButtons={item.componentButtons}
      componentInput={item.componentInput}
      componentSubSection1={item.componentSubSection1}
    />
  );

  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      {/* The below section represents three pinned Metabolic Journal components that the user wants easy access to. When clicked, the component will be displayed below this section and above the metabolic journal list */}
      <View style={{ flexDirection: 'row', marginBottom: '2%' }}>
        <PinnedComponent />
        <PinnedComponent />
        <PinnedComponent />
      </View>
      {/* The below section is a flatlist of the array of Metabolic Journal components
            Users need to be able to reorder components in the array by pressing and dragging them to a new position
            Users need to be able to be able to add/replace a component in the pinned section
      */}
      <View style={{ alignItems: 'center', width: '100%', paddingBottom: 250 }}>
        <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.componentID} />
      </View>
    </SafeAreaView>
  );
}

export default MetabolicJournal;
