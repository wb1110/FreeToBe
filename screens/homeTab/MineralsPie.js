import { Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import Svg from 'react-native-svg';
import { VictoryContainer, VictoryPie } from 'victory-native';

export default function MineralsPie() {
  const { theme } = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <Svg width="190" height="200" viewBox="0 0 190 300">
        <VictoryPie
          width={190}
          height={190}
          style={{
            labels: {
              fill: theme.colors.white,
            },
          }}
          containerComponent={<VictoryContainer width={190} height={300} />}
          innerRadius={80}
          // animate={{ duration: 1000 }}
          data={[
            { x: 'Calcium', y: 10 },
            { x: `Choline`, y: 10 },
            { x: `Copper`, y: 10 },
            { x: 'Iodine', y: 10 },
            { x: `Iron`, y: 10 },
            { x: `Magnesium`, y: 10 },
            { x: 'Phosphorous', y: 10 },
            { x: `Potassium`, y: 10 },
            { x: `Selenium`, y: 10 },
            { x: 'Sodium', y: 10 },
            { x: `Zinc`, y: 10 },
          ]}
        />
      </Svg>
      <View style={{ alignItems: 'center' }}>
        <Text>Calcium: 10</Text>
        <Text>Choline: 10</Text>
        <Text>Copper: 10</Text>
        <Text>Iodine: 10</Text>
        <Text>Iron: 10</Text>
        <Text>Magnesium: 10</Text>
        <Text>Phosphorous: 10</Text>
        <Text>Potassium: 10</Text>
        <Text>Selenium: 10</Text>
        <Text>Sodium: 10</Text>
        <Text>Zinc: 10</Text>
      </View>
    </View>
  );
}
