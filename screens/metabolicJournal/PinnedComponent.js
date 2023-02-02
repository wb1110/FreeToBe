import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, useTheme } from '@rneui/themed';
import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Journal from './categories/Journal';
import Sleep from './categories/Sleep';
import Weight from './categories/Weight';
import calculateTotal from './categories/sleepFunctions/SleepFunctions';

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
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor:
              selectedComponent === 'Sleep' ? theme.colors.white : theme.colors.primary,
          }}
          onPress={() => setSelectedComponent('Sleep')}
        >
          <Text
            h4
            h4Style={{
              padding: '4%',
              display: selectedComponent === 'Sleep' ? 'none' : 'flex',
            }}
          >
            Sleep
          </Text>
          <MaterialCommunityIcons
            name="power-sleep"
            size={48}
            color={selectedComponent === 'Sleep' ? theme.colors.primary : 'white'}
            style={{ padding: '4%' }}
          />
          <Text h4 h4Style={{ display: selectedComponent === 'Sleep' ? 'none' : 'flex' }}>
            {metabolicData.sleep ? calculateTotal(metabolicData.sleep) : null}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor:
              selectedComponent === 'Journal' ? theme.colors.white : theme.colors.primary,
          }}
          onPress={() => setSelectedComponent('Journal')}
        >
          <Text
            h4
            h4Style={{
              padding: '4%',
              display: selectedComponent === 'Journal' ? 'none' : 'flex',
            }}
          >
            Journal
          </Text>
          <MaterialCommunityIcons
            name="notebook"
            size={48}
            color={selectedComponent === 'Journal' ? theme.colors.primary : 'white'}
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
        <View style={{ backgroundColor: theme.colors.white }}>
          <Journal
            metabolicData={metabolicData}
            setMetabolicData={setMetabolicData}
            navigation={navigation}
          />
        </View>
      ) : null}
      {selectedComponent === 'Sleep' ? (
        <View style={{ backgroundColor: theme.colors.white }}>
          <Sleep metabolicData={metabolicData} setMetabolicData={setMetabolicData} />
        </View>
      ) : null}
    </View>
  );
}

export default PinnedComponent;
