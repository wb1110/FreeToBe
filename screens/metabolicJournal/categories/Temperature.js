/* eslint-disable global-require */
import { Button, Input, Text, useTheme, Overlay } from '@rneui/themed';
import { useState } from 'react';
import { View } from 'react-native';
import MealTemperatures from './MealTemperatures';

export default function Temperature({ metabolicData, setMetabolicData }) {
  const { theme } = useTheme();
  const [wakingVisible, setWakingVisible] = useState(false);
  const [mealVisible, setMealVisible] = useState(false);
  const [values, setValues] = useState({
    preMealTemp: '',
    postMealTemp: '',
  });

  const handleSubmit = (v) => {
    setMetabolicData({
      ...metabolicData,
      temperature: {
        ...(metabolicData.temperature || {}),
        meals: [...(metabolicData.temperature.meals || []), v],
      },
    });
    setValues({
      preMealTemp: '',
      postMealTemp: '',
    });
  };

  const toggleOverlay = (temp) => {
    if (temp === 'waking') {
      setWakingVisible(!wakingVisible);
    }
    if (temp === 'meal') {
      setMealVisible(!mealVisible);
    }
  };
  return (
    <View
      style={{
        alignItems: 'flex-start',
        flex: 1,
        margin: '2%',
      }}
    >
      <View style={{ flex: 1 }}>
        <Text h3>Temperature</Text>
        <View style={{ flex: 1 }}>
          <Button
            title="Set Waking Temp"
            onPress={() => toggleOverlay('waking')}
            containerStyle={{ borderRadius: 20, width: 200 }}
          />
          <Overlay isVisible={wakingVisible} onBackdropPress={() => toggleOverlay('waking')}>
            <Input
              label="Enter waking temperature here"
              onChangeText={(value) =>
                setMetabolicData({
                  ...metabolicData,
                  temperature: {
                    wakingTemp: value,
                  },
                })
              }
              labelStyle={{ color: 'black' }}
              style={{ borderColor: 'black', borderWidth: 1, borderRadius: 20, color: 'black' }}
            />
          </Overlay>
          <Button
            title="Add temp around a meal"
            onPress={() => toggleOverlay('meal')}
            containerStyle={{ borderRadius: 20, width: 200 }}
          />
          <Overlay
            isVisible={mealVisible}
            onBackdropPress={() => toggleOverlay('meal')}
            overlayStyle={{ alignItems: 'center' }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Input
                label="Meal Name"
                value={values.mealName}
                onChangeText={(value) =>
                  setValues({
                    ...values,
                    mealName: value,
                  })
                }
                labelStyle={{ color: 'black' }}
                style={{ borderColor: 'black', borderWidth: 1, borderRadius: 20, color: 'black' }}
                containerStyle={{ width: '33%', alignItems: 'center' }}
              />
              <Input
                label="Pre-Meal"
                value={values.preMealTemp}
                onChangeText={(value) =>
                  setValues({
                    ...values,
                    preMealTemp: value,
                  })
                }
                labelStyle={{ color: 'black' }}
                style={{ borderColor: 'black', borderWidth: 1, borderRadius: 20, color: 'black' }}
                containerStyle={{ width: '33%', alignItems: 'center' }}
              />
              <Input
                label="Post-Meal"
                value={values.postMealTemp}
                onChangeText={(value) =>
                  setValues({
                    ...values,
                    postMealTemp: value,
                  })
                }
                labelStyle={{ color: 'black' }}
                style={{ borderColor: 'black', borderWidth: 1, borderRadius: 20, color: 'black' }}
                containerStyle={{ width: '33%', alignItems: 'center' }}
              />
            </View>
            <Button
              title="Add meal"
              onPress={() => handleSubmit(values)}
              containerStyle={{ borderRadius: 20, width: 200 }}
            />
          </Overlay>

          <View style={{ margin: '2%' }}>
            {metabolicData.temperature && metabolicData.temperature.meals
              ? metabolicData.temperature.meals.map((item) => (
                  <View
                    key={item.mealName}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      backgroundColor: theme.colors.primary,
                      padding: '2%',
                      marginBottom: '2%',
                    }}
                  >
                    <Text>Meal Name: {item.mealName}</Text>
                    <Text>Pre-Meal: {item.preMealTemp}</Text>
                    <Text>Post-Meal: {item.postMealTemp}</Text>
                  </View>
                ))
              : null}
          </View>
        </View>
      </View>
    </View>
  );
}
