import { View } from 'react-native';
import getTodaysTrackerData from '../../../functions/getTodaysTrackerData';
import useTrackerStore from '../../../state/TrackerStore';
import MicroNutrientProgressBar from './MicroNutrientProgressBar';
import microNutrientGoals from '../../../functions/microNutrientGoals';

export default function Slide3() {
  const { tracker } = useTrackerStore();
  const todaysData = getTodaysTrackerData(tracker);
  const maxWidth = 100;
  // console.log(todaysData, 'todaysData in Slide3');
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
  console.log(microNutrientGoals('calcium', 'mg', false, false));

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
            goal={microNutrientGoals('calcium', 'mg', false, false)}
            maxWidth={maxWidth}
          />
          <MicroNutrientProgressBar
            color="#800020"
            title="Copper"
            unit="µg"
            consumed={copper}
            goal={microNutrientGoals('copper', 'µg', false, false)}
            maxWidth={maxWidth}
          />
          <MicroNutrientProgressBar
            color="#800020"
            title="Choline"
            unit="mg"
            consumed={choline}
            goal={microNutrientGoals('choline', 'mg', false, false)}
            maxWidth={maxWidth}
          />
          <MicroNutrientProgressBar
            color="#800020"
            title="Iodine"
            unit="µg"
            consumed={iodine}
            goal={microNutrientGoals('iodine', 'µg', false, false)}
            maxWidth={maxWidth}
          />
          <MicroNutrientProgressBar
            color="#800020"
            title="Iron"
            unit="mg"
            consumed={iron}
            goal={microNutrientGoals('iron', 'mg', false, false)}
            maxWidth={maxWidth}
          />
          <MicroNutrientProgressBar
            color="#800020"
            title="Magnesium"
            unit="mg"
            consumed={magnesium}
            goal={microNutrientGoals('magnesium', 'mg', false, false)}
            maxWidth={maxWidth}
          />
          <MicroNutrientProgressBar
            color="#800020"
            title="Phosphorous"
            unit="mg"
            consumed={phosphorous}
            goal={microNutrientGoals('phosphorous', 'mg', false, false)}
            maxWidth={maxWidth}
          />
          <MicroNutrientProgressBar
            color="#800020"
            title="Potassium"
            unit="mg"
            consumed={potassium}
            goal={microNutrientGoals('potassium', 'mg', false, false)}
            maxWidth={maxWidth}
          />
          <MicroNutrientProgressBar
            color="#800020"
            title="Selenium"
            unit="mg"
            consumed={selenium}
            goal={microNutrientGoals('selenium', 'µg', false, false)}
            maxWidth={maxWidth}
          />
          <MicroNutrientProgressBar
            color="#800020"
            title="Sodium"
            unit="mg"
            consumed={sodium}
            goal={microNutrientGoals('sodium', 'mg', false, false)}
            maxWidth={maxWidth}
          />
          <MicroNutrientProgressBar
            color="#800020"
            title="Zinc"
            unit="mg"
            consumed={zinc}
            goal={microNutrientGoals('zinc', 'mg', false, false)}
            maxWidth={maxWidth}
          />
        </View>
      </View>
    </View>
  );
}
