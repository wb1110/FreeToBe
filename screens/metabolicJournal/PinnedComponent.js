import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, useTheme } from '@rneui/themed';
import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Journal from './categories/Journal';
import Sleep from './categories/Sleep';
import Weight from './categories/Weight';

function PinnedComponent({ metabolicData, setMetabolicData, navigation }) {
  const { theme } = useTheme();
  const [selectedComponent, setSelectedComponent] = useState();

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
          backgroundColor: theme.colors.primary,
        }}
      >
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor:
              selectedComponent === 'Weight' ? theme.colors.white : theme.colors.primary,
          }}
          onPress={() => setSelectedComponent('Weight')}
        >
          <Text
            h4
            h4Style={{
              padding: '4%',
              display: selectedComponent === 'Weight' ? 'none' : 'flex',
            }}
          >
            Weight
          </Text>
          <MaterialCommunityIcons
            name="scale-bathroom"
            size={48}
            color={selectedComponent === 'Weight' ? theme.colors.primary : 'white'}
            style={{ padding: '4%' }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignItems: 'center', flex: 1 }}
          onPress={() => setSelectedComponent('Sleep')}
        >
          <Text h4 style={{ padding: '4%' }}>
            Sleep
          </Text>
          <MaterialCommunityIcons
            name="power-sleep"
            size={48}
            color="white"
            style={{ padding: '4%' }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: 'center', flex: 1 }}
          onPress={() => setSelectedComponent('Journal')}
        >
          <Text h4 style={{ padding: '4%' }}>
            Journal
          </Text>
          <MaterialCommunityIcons
            name="notebook"
            size={48}
            color="white"
            style={{ padding: '4%' }}
          />
        </TouchableOpacity>
      </View>
      {selectedComponent === 'Weight' ? (
        <View style={{ backgroundColor: theme.colors.white }}>
          <Weight metabolicData={metabolicData} setMetabolicData={setMetabolicData} />
        </View>
      ) : null}
      {selectedComponent === 'Journal' ? (
        <Journal
          metabolicData={metabolicData}
          setMetabolicData={setMetabolicData}
          navigation={navigation}
        />
      ) : null}
      {selectedComponent === 'Sleep' ? (
        <Sleep metabolicData={metabolicData} setMetabolicData={setMetabolicData} />
      ) : null}
    </View>
  );
}

export default PinnedComponent;
