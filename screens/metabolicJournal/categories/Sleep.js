/* eslint-disable global-require */
import { Button, Input, Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import moment from 'moment';
import CreateSleepEntry from './CreateSleepEntry';

export default function Sleep({ metabolicData, setMetabolicData }) {
  const { theme } = useTheme();
  return (
    <View
      style={{
        alignItems: 'flex-start',
        flex: 1,
        margin: '2%',
      }}
    >
      <View style={{ flex: 1 }}>
        <Text h3>Sleep</Text>
        <View style={{ flex: 1 }}>
          <View style={{ margin: '2%' }}>
            {metabolicData.sleep
              ? metabolicData.sleep.map((item) => {
                  const time1 = moment(item.startTime, 'h:mm a');
                  const time2 = moment(item.endTime, 'h:mm a');
                  const difference = time2.diff(time1, 'hours');
                  return (
                    <View
                      key={item.id}
                      style={{
                        justifyContent: 'space-between',
                        backgroundColor: theme.colors.primary,
                        padding: '2%',
                        marginBottom: '2%',
                      }}
                    >
                      <Text>Start Time: {moment(item.startTime).format('h:mm a')}</Text>
                      <Text>End Time: {moment(item.endTime).format('h:mm a')}</Text>
                      <Text>Hours Slept: {difference}</Text>
                    </View>
                  );
                })
              : null}
            <Text>Click below to add temperatures before and after a meal</Text>
            <CreateSleepEntry metabolicData={metabolicData} setMetabolicData={setMetabolicData} />
          </View>
        </View>
      </View>
    </View>
  );
}
