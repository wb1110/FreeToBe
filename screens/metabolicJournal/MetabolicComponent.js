import { Input, Text } from '@rneui/themed';
import { ScrollView, View } from 'react-native';
import ComponentButton from './ComponentButton';

function MetabolicComponent({ componentName, componentButtons, componentInput }) {
  return (
    <View
      style={{
        alignItems: 'flex-start',
        flex: 1,
        margin: '2%',
      }}
    >
      <ScrollView directionalLockEnabled contentContainerStyle={{ flexGrow: 1, paddingRight: 200 }}>
        <View>
          <Text h4>{componentName}</Text>

          {componentInput ? (
            <View style={{ width: 200 }}>
              <Input placeholder="Placeholder text" />
            </View>
          ) : null}

          {/* mapping of componentButtons */}
          {componentButtons ? (
            <View
              style={{
                flexDirection: 'row',
              }}
            >
              {componentButtons.map((item) => (
                <ComponentButton
                  buttonTitle={item.buttonTitle}
                  buttonIcon={item.buttonIcon}
                  buttonColor={item.buttonColor}
                  key={item.buttonTitle}
                />
              ))}
            </View>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
}

export default MetabolicComponent;
