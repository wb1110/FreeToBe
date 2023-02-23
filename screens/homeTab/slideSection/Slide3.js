import { View } from 'react-native';
import microNutrientGoals from '../../../functions/microNutrientGoals';
import useStore from '../../../state/Store';
import MicroNutrientProgressBar from './MicroNutrientProgressBar';

export default function Slide3({
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
}) {
  const maxWidth = 100;
  const { assessment } = useStore();
  const { dueDate, nursing } = assessment;

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
            goal={microNutrientGoals('calcium', 'mg', dueDate, nursing)}
            maxWidth={maxWidth}
          />
          <MicroNutrientProgressBar
            color="#800020"
            title="Copper"
            unit="µg"
            consumed={copper}
            goal={microNutrientGoals('copper', 'µg', dueDate, nursing)}
            maxWidth={maxWidth}
          />
          <MicroNutrientProgressBar
            color="#800020"
            title="Choline"
            unit="mg"
            consumed={choline}
            goal={microNutrientGoals('choline', 'mg', dueDate, nursing)}
            maxWidth={maxWidth}
          />
          <MicroNutrientProgressBar
            color="#800020"
            title="Iodine"
            unit="µg"
            consumed={iodine}
            goal={microNutrientGoals('iodine', 'µg', dueDate, nursing)}
            maxWidth={maxWidth}
          />
          <MicroNutrientProgressBar
            color="#800020"
            title="Iron"
            unit="mg"
            consumed={iron}
            goal={microNutrientGoals('iron', 'mg', dueDate, nursing)}
            maxWidth={maxWidth}
          />
          <MicroNutrientProgressBar
            color="#800020"
            title="Magnesium"
            unit="mg"
            consumed={magnesium}
            goal={microNutrientGoals('magnesium', 'mg', dueDate, nursing)}
            maxWidth={maxWidth}
          />
          <MicroNutrientProgressBar
            color="#800020"
            title="Phosphorous"
            unit="mg"
            consumed={phosphorous}
            goal={microNutrientGoals('phosphorous', 'mg', dueDate, nursing)}
            maxWidth={maxWidth}
          />
          <MicroNutrientProgressBar
            color="#800020"
            title="Potassium"
            unit="mg"
            consumed={potassium}
            goal={microNutrientGoals('potassium', 'mg', dueDate, nursing)}
            maxWidth={maxWidth}
          />
          <MicroNutrientProgressBar
            color="#800020"
            title="Selenium"
            unit="mg"
            consumed={selenium}
            goal={microNutrientGoals('selenium', 'µg', dueDate, nursing)}
            maxWidth={maxWidth}
          />
          <MicroNutrientProgressBar
            color="#800020"
            title="Sodium"
            unit="mg"
            consumed={sodium}
            goal={microNutrientGoals('sodium', 'mg', dueDate, nursing)}
            maxWidth={maxWidth}
          />
          <MicroNutrientProgressBar
            color="#800020"
            title="Zinc"
            unit="mg"
            consumed={zinc}
            goal={microNutrientGoals('zinc', 'mg', dueDate, nursing)}
            maxWidth={maxWidth}
          />
        </View>
      </View>
    </View>
  );
}
