/* eslint-disable global-require */
import { Text, useTheme } from '@rneui/themed';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import CreateSleepEntry from './CreateSleepEntry';

export default function Sleep({ metabolicData, setMetabolicData }) {
  const [total, setTotal] = useState(0);
  const { theme } = useTheme();

  const calculateTotal = (sleepData) => {
    let newTotal = 0;
    sleepData.forEach((item) => {
      const time1 = moment(item.startTime, 'h:mm a');
      const time2 = moment(item.endTime, 'h:mm a');
      newTotal += time2.diff(time1, 'hours');
    });
    setTotal(newTotal);
  };

  useEffect(() => {
    if (metabolicData.sleep) {
      calculateTotal(metabolicData.sleep);
    }
  }, [metabolicData.sleep]);

  return (
    <View
      style={{
        alignItems: 'flex-start',
        flex: 1,
        margin: '2%',
      }}
    >
      <View>
        <Text h3>Sleep</Text>
        <View>
          <Text h4>Total Hours Slept: {total}</Text>
          <CreateSleepEntry metabolicData={metabolicData} setMetabolicData={setMetabolicData} />
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
          </View>
        </View>
      </View>
    </View>
  );
}
