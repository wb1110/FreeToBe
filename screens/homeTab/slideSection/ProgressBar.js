import { Text } from '@rneui/themed';
import { View } from 'react-native';

export default function ProgressBar({ color, title, consumed, goal, unit }) {
  const percent = () => {
    if (goal > 0) {
      return Math.round((consumed / goal) * 100);
    }
    return 0;
  };
  console.log(percent());
  const maximumValue = (inner, outer) => {
    if (inner > outer) {
      return 300;
    }
    if (inner <= 0) {
      return 0;
    }
    return percent() * 3;
  };
  const borderRadiusChange = (width) => {
    if (width === 300) {
      return 20;
    }
    if (width <= 0) {
      return 0;
    }
    return 0;
  };

  return (
    <View style={{ marginBottom: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text h4>
          {title} - {consumed}
          {unit} / {goal}
          {unit}
        </Text>
        <Text h4>{percent() || 0}%</Text>
      </View>
      <View
        style={{
          borderColor: color,
          borderWidth: 2,
          width: 300,
          borderRadius: 20,
          height: 20,
          justifyContent: 'center',
        }}
      >
        {goal ? (
          <View
            style={{
              width: maximumValue(percent() * 3, 300),
              backgroundColor: color,
              borderColor: color,
              borderWidth: 1,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,

              borderTopRightRadius: borderRadiusChange(maximumValue(percent() * 3, 300)),
              borderBottomRightRadius: percent()
                ? borderRadiusChange(maximumValue(percent() * 3, 300))
                : 0,
              height: 20,
            }}
          />
        ) : null}
      </View>
    </View>
  );
}
