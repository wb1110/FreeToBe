import { Text } from '@rneui/themed';
import { ScrollView, View } from 'react-native';
import ComponentButton from './ComponentButton';

function MetabolicComponent({ componentName, componentButtons }) {
  return (
    <View
      style={{
        alignItems: 'flex-start',
        flex: 1,
        margin: '2%',
        paddingBottom: '2%',
      }}
    >
      <ScrollView directionalLockEnabled contentContainerStyle={{ flexGrow: 1, paddingRight: 200 }}>
        <View>
          <Text>{componentName}</Text>
          <View
            style={{
              flexDirection: 'row',
            }}
          >
            {/* mapping of componentButtons */}
            {componentButtons.map((item) => (
              <ComponentButton
                buttonTitle={item.buttonTitle}
                buttonIcon={item.buttonIcon}
                buttonColor={item.buttonColor}
                key={item.buttonTitle}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default MetabolicComponent;
