import { FlatList, SafeAreaView, View } from 'react-native';
import { useEffect, useState } from 'react';
import { Button } from '@rneui/themed';
import MetabolicComponent from './MetabolicComponent';
import PinnedComponent from './PinnedComponent';
import data from './MetabolicComponentData';
import Calendar from '../tracker/Calendar';
import useTrackerStore from '../../state/TrackerStore';

function MetabolicJournal() {
  // metabolic state needs to be created as well as async storage
  // there is no connection to the tracker or home tab at this time, but eventually the app will need to look for a correlation between the foods consumed on that day and what was recorded in the journal to provide helpful hints to the user
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  // date = datePickerDate
  const [date, setDate] = useState(new Date());
  const [dateData, setDateData] = useState();
  const trackerState = useTrackerStore();
  const { tracker } = trackerState;

  const getObjectByDateProperty = (array, key, value) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return array[i];
      }
    }
    return null;
  };

  const renderItem = ({ item }) => (
    <MetabolicComponent
      componentName={item.componentName}
      componentButtons={item.componentButtons}
      componentInput={item.componentInput}
      componentSubSection1={item.componentSubSection1}
      componentSubSection2={item.componentSubSection2}
      periodCalendar={item.periodCalendar}
      componentPhoto={item.componentPhoto}
    />
  );

  useEffect(() => {
    console.log(getObjectByDateProperty(tracker, 'date', dateData), 'function result');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateData]);

  return (
    <SafeAreaView style={{ alignItems: 'center', flex: 1 }}>
      <View>
        <Calendar
          isDatePickerVisible={isDatePickerVisible}
          setDatePickerVisibility={setDatePickerVisibility}
          setDateData={setDateData}
          date={date}
          setDate={setDate}
        />
      </View>
      {/* The below section represents three pinned Metabolic Journal components that the user wants easy access to. When clicked, the component will be displayed below this section and above the metabolic journal list */}
      <View style={{ flexDirection: 'row', marginBottom: '2%', flex: 1, alignItems: 'center' }}>
        <PinnedComponent />
        <PinnedComponent />
        <PinnedComponent />
      </View>
      {/* The below section is a flatlist of the array of Metabolic Journal components
            Users need to be able to reorder components in the array by pressing and dragging them to a new position
            Users need to be able to be able to add/replace a component in the pinned section
      */}
      <View style={{ alignItems: 'center', width: '100%', flex: 3.5 }}>
        <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.componentID} />
      </View>
      <View style={{ width: '90%', margin: '2%' }}>
        <Button title="Log the Journal" />
      </View>
    </SafeAreaView>
  );
}

export default MetabolicJournal;
