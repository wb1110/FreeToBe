import { Text } from '@rneui/themed';
import { View } from 'react-native';

export default function ProgressBar({ color, title, consumed, goal, unit }) {
  const percent = Math.round((consumed / goal) * 100);
  const maximumValue = (inner, outer) => {
    if (inner > outer) {
      return 300;
    }
    return percent * 3;
  };
  const borderRadiusChange = (width) => {
    if (width === 300) {
      return 20;
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
        <Text h4>{percent}%</Text>
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
        <View
          style={{
            width: maximumValue(percent * 3, 300),
            backgroundColor: color,
            borderColor: color,
            borderWidth: 1,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,

            borderTopRightRadius: borderRadiusChange(maximumValue(percent * 3, 300)),
            borderBottomRightRadius: borderRadiusChange(maximumValue(percent * 3, 300)),
            height: 20,
          }}
        />
      </View>
    </View>
  );
}
