import { View, Text } from 'react-native';
import getTodaysTrackerData from '../../../functions/getTodaysTrackerData';
import MicroNutrientProgressBar from './MicroNutrientProgressBar';
import useTrackerStore from '../../../state/TrackerStore';

export default function Slide3() {
  const { tracker } = useTrackerStore();
  const todaysData = getTodaysTrackerData(tracker);
  const maxWidth = 100;
  console.log(todaysData);
  const {
    calcium,
    copper,
    choline,
    iodine,
    iron,
    magnesium,
    phosphorous,
    potassium,
    selenium,
    sodium,
    zinc,
  } = todaysData;
  // console.log(tracker);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View
          style={{
            padding: 5,
            flexDirection: 'row',
            width: 350,
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <MicroNutrientProgressBar
            color="#800020"
            title="Calcium"
            unit="mg"
            consumed={calcium}
            goal={calcium}
            maxWidth={maxWidth}
          />
          <MicroNutrientProgressBar
            color="#800020"
            title="Copper"
            unit="mg"
            consumed={copper}
            goal={copper}
            maxWidth={maxWidth}
          />
          <MicroNutrientProgressBar
            color="#800020"
            title="Choline"
            unit="mg"
            consumed={choline}
            goal={choline}
            maxWidth={maxWidth}
          />
          <MicroNutrientProgressBar
            color="#800020"
            title="Iodine"
            unit="mg"
            consumed={iodine}
            goal={iodine}
            maxWidth={maxWidth}
          />
          <MicroNutrientProgressBar
            color="#800020"
            title="Iron"
            unit="mg"
            consumed={iron}
            goal={iron}
            maxWidth={maxWidth}
          />
          <MicroNutrientProgressBar
            color="#800020"
            title="Magnesium"
            unit="mg"
            consumed={magnesium}
            goal={magnesium}
            maxWidth={maxWidth}
          />
          <MicroNutrientProgressBar
            color="#800020"
            title="Phosphorous"
            unit="mg"
            consumed={phosphorous}
            goal={phosphorous}
            maxWidth={maxWidth}
          />
          <MicroNutrientProgressBar
            color="#800020"
            title="Potassium"
            unit="mg"
            consumed={potassium}
            goal={potassium}
            maxWidth={maxWidth}
          />
          <MicroNutrientProgressBar
            color="#800020"
            title="Selenium"
            unit="mg"
            consumed={selenium}
            goal={selenium}
            maxWidth={maxWidth}
          />
          <MicroNutrientProgressBar
            color="#800020"
            title="Sodium"
            unit="mg"
            consumed={sodium}
            goal={sodium}
            maxWidth={maxWidth}
          />
          <MicroNutrientProgressBar
            color="#800020"
            title="Zinc"
            unit="mg"
            consumed={zinc}
            goal={zinc}
            maxWidth={maxWidth}
          />
        </View>
      </View>
    </View>
  );
}
