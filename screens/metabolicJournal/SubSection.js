import { Text } from '@rneui/themed';
import { View } from 'react-native';
import ComponentButton from './ComponentButton';

function SubSection({ sectionTitle, sectionButtons }) {
  return (
    <View
      style={{
        alignItems: 'flex-start',
        margin: '2%',
      }}
    >
      <Text h4>{sectionTitle}</Text>
      {/* mapping of componentButtons when there are no sub-sections */}
      {sectionButtons ? (
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          {sectionButtons.map((item) => (
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
  );
}

export default SubSection;
