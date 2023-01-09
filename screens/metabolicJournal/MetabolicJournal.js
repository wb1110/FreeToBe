import { Button } from '@rneui/themed';
import { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import useMetabolicStore from '../../state/MetabolicStore';
import Calendar from './Calendar';
import Mood from './categories/Mood';

function MetabolicJournal() {
  // metabolic state needs to be created as well as async storage
  // there is no connection to the tracker or home tab at this time, but eventually the app will need to look for a correlation between the foods consumed on that day and what was recorded in the journal to provide helpful hints to the user
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  // date = datePickerDate
  const [date, setDate] = useState(new Date());
  const [dateData, setDateData] = useState();
  const metabolicState = useMetabolicStore();
  const { addJournalEntry, metabolicJournal } = metabolicState;
  const [metabolicData, setMetabolicData] = useState({});

  const getObjectByDateProperty = (array, key, value) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        setMetabolicData(array[i]);
        return metabolicData;
      }
    }
    return null;
  };

  const jounralEntryExists = () => getObjectByDateProperty(metabolicJournal, 'date', dateData);

  useEffect(() => {
    jounralEntryExists();
    if (jounralEntryExists() === null) {
      setMetabolicData({
        date: dateData,
        weight: 0,
        journal: '',
        sleep: '',
        temperature: {
          wakingTemp: 0,
          meals: [
            {
              preMealTemp: 0,
              postMealTemp: 0,
            },
          ],
        },
        pulse: 0,
        mood: [],
        sex: [],
        bowelMovements: [],
        period: {
          symptoms: [],
          mentrualFlow: '',
        },
        fertility: {
          pregnancyTest: '',
          ovulation: '',
        },
        physicalActivity: [],
        skin: [],
        hair: [],
        nails: [],
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateData]);

  console.log(metabolicData, 'mJ');

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
      {/* The below section is a flatlist of the array of Metabolic Journal components
            Users need to be able to reorder components in the array by pressing and dragging them to a new position
            Users need to be able to be able to add/replace a component in the pinned section
      */}
      <View style={{ alignItems: 'center', width: '100%', flex: 3.5 }}>
        {/* <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.componentID} /> */}
        <Mood metabolicData={metabolicData} setMetabolicData={setMetabolicData} />
      </View>
      <View style={{ width: '90%', margin: '2%' }}>
        <Button
          title="Log the Journal"
          onPress={() => {
            addJournalEntry(metabolicData);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default MetabolicJournal;
