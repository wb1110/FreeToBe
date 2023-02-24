import { Text } from '@rneui/themed';
import { View } from 'react-native';

export default function MicroNutrientProgressBar({ color, title, consumed, goal, unit, maxWidth }) {
  const percent = () => {
    if (goal > 0) {
      return Math.round((consumed / goal) * 100);
    }
    return 0;
  };
  const maximumValue = (inner, outer) => {
    if (inner > outer) {
      return maxWidth;
    }
    if (inner < 5) {
      return 7;
    }
    return percent() * 3;
  };
  const borderRadiusChange = (width) => {
    if (width === maxWidth) {
      return 20;
    }
    if (width <= 0) {
      return 0;
    }
    return 0;
  };

  return (
    <View style={{ marginBottom: 16, marginRight: 8 }}>
      <Text style={{ fontSize: 12, alignSelf: 'center' }}>{title}</Text>
      <View
        style={{
          borderColor: color,
          borderWidth: 2,
          width: maxWidth,
          borderRadius: 20,
          height: 20,
          justifyContent: 'center',
        }}
      >
        {percent() * 3 >= 1 ? (
          <View
            style={{
              width: maximumValue(percent() * 3, maxWidth),
              backgroundColor: color,
              borderColor: color,
              borderWidth: 1,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,

              borderTopRightRadius: borderRadiusChange(maximumValue(percent() * 3, maxWidth)),
              borderBottomRightRadius: percent()
                ? borderRadiusChange(maximumValue(percent() * 3, maxWidth))
                : 0,
              height: 20,
            }}
          />
        ) : null}
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 12 }}>
          {Math.round(consumed)}/{goal}
          {unit}
        </Text>
        <Text style={{ fontSize: 12 }}>{percent() || 0}%</Text>
      </View>
    </View>
  );
}
