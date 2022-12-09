import { Input, Text } from '@rneui/themed';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import ComponentButton from './ComponentButton';
import PeriodCalendar from './PeriodCalendar';
import SubSection from './SubSection';

function MetabolicComponent({
  componentName,
  componentButtons,
  componentInput,
  componentSubSection1,
  componentSubSection2,
  periodCalendar,
}) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  // date = datePickerDate
  const [date, setDate] = useState(new Date());
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
          {/* The below calendar is for the Period Component */}
          {periodCalendar ? (
            <PeriodCalendar
              isDatePickerVisible={isDatePickerVisible}
              setDatePickerVisibility={setDatePickerVisibility}
              date={date}
              setDate={setDate}
            />
          ) : null}
          {/* The component has a text input */}
          {componentInput ? (
            <View style={{ width: 200 }}>
              <Input placeholder="Placeholder text" />
            </View>
          ) : null}

          {/* mapping of componentButtons when there are no sub-sections */}
          {componentButtons ? (
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
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
          {/* If there are sub sections, they will go here: */}
          {/* Section 1 */}
          {componentSubSection1 ? (
            <SubSection
              sectionTitle={componentSubSection1.sectionTitle}
              sectionButtons={componentSubSection1.sectionButtons}
            />
          ) : null}
          {componentSubSection2 ? (
            <SubSection
              sectionTitle={componentSubSection2.sectionTitle}
              sectionButtons={componentSubSection2.sectionButtons}
            />
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
}

export default MetabolicComponent;
