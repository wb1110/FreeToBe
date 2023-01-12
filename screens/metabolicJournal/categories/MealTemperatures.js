/* eslint-disable global-require */
import { Input } from '@rneui/themed';
import { useState } from 'react';
import { View } from 'react-native';

export default function MealTemperatures({ metabolicData, setMetabolicData }) {
  const [values, setValues] = useState({
    preMealTemp: '',
    postMealTemp: '',
  });
  return (
    <View
      style={{
        alignItems: 'flex-start',
        flex: 1,
        margin: '2%',
      }}
    >
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Input
            label="Enter pre-meal temperature here"
            onChangeText={(value) =>
              setValues({
                ...values,
                preMealTemp: value,
              })
            }
            containerStyle={{ width: '50%' }}
          />
          <Input
            label="Enter post-meal temperature here"
            onChangeText={(value) =>
              setValues({
                ...values,
                postMealTemp: value,
              })
            }
            containerStyle={{ width: '50%' }}
          />
        </View>
      </View>
    </View>
  );
}
