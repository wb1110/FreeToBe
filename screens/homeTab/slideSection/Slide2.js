import { useTheme } from '@rneui/themed';
import { View } from 'react-native';
import ProgressBar from './ProgressBar';

export default function Slide2({
  calories,
  goalCalories,
  protein,
  goalProtein,
  carbs,
  fats,
  goalCarbs,
  goalFat,
}) {
  const { theme } = useTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={{ padding: 20 }}>
          <ProgressBar
            color={theme.colors.chart1}
            title="Energy"
            unit="kCal"
            consumed={calories}
            goal={goalCalories}
            maxWidth={300}
          />
          <ProgressBar
            color={theme.colors.chart2}
            title="Protein"
            unit="g"
            consumed={protein}
            goal={goalProtein}
            maxWidth={300}
          />
          <ProgressBar
            color={theme.colors.chart3}
            title="Carbs"
            unit="g"
            consumed={carbs}
            goal={goalCarbs}
            maxWidth={300}
          />
          <ProgressBar
            color={theme.colors.chart4}
            title="Fats"
            unit="g"
            consumed={fats}
            goal={goalFat}
            maxWidth={300}
          />
        </View>
      </View>
    </View>
  );
}
