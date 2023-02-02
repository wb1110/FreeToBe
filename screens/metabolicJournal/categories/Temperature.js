/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
import { Button, Image, Input, Overlay, Text, useTheme } from '@rneui/themed';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import InputButton from '../InputButton';

export default function Temperature({ metabolicData, setMetabolicData }) {
  const { theme } = useTheme();
  const [wakingVisible, setWakingVisible] = useState(false);
  const [mealVisible, setMealVisible] = useState(false);
  const [values, setValues] = useState({
    mealName: '',
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
      mealName: '',
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
        margin: '4% 2%',
      }}
    >
      <View style={{ flex: 1 }}>
        <Text h3>Temperature</Text>
        <View style={{ flex: 1, marginTop: '4%' }}>
          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <InputButton
              buttonTitle="Set Waking Temp"
              buttonIcon={
                <View style={styles.iconContainer}>
                  <Image
                    style={styles.icon}
                    source={require('../../../assets/icons/MoodIcons/Calm.png')}
                  />
                </View>
              }
              onPress={() => toggleOverlay('waking')}
            />
            <InputButton
              buttonTitle="Add temp around meal"
              buttonIcon={
                <View style={styles.iconContainer}>
                  <Image
                    style={styles.icon}
                    source={require('../../../assets/icons/MoodIcons/Happy.png')}
                  />
                </View>
              }
              onPress={() => toggleOverlay('meal')}
            />
          </View>
          <Overlay
            isVisible={wakingVisible}
            onBackdropPress={() => toggleOverlay('waking')}
            overlayStyle={{ alignItems: 'center' }}
          >
            <Input
              label="Enter waking temperature here"
              value={
                metabolicData.temperature?.wakingTemp
                  ? `${metabolicData.temperature.wakingTemp}`
                  : null
              }
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
            <Button
              title="Save"
              onPress={() => toggleOverlay('waking')}
              containerStyle={{ borderRadius: 20, width: 200 }}
            />
          </Overlay>
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
            <View style={{ margin: '2%', flexDirection: 'row', flexWrap: 'wrap' }}>
              {metabolicData.temperature && metabolicData.temperature.meals
                ? metabolicData.temperature.meals.map((item) => (
                    <View
                      key={item.mealName}
                      style={{
                        justifyContent: 'space-between',
                        backgroundColor: theme.colors.primary,
                        padding: '4%',
                        margin: '2%',
                        borderRadius: 20,
                      }}
                    >
                      <Text>Meal Name: {item.mealName}</Text>
                      <Text>Pre-Meal: {item.preMealTemp}</Text>
                      <Text>Post-Meal: {item.postMealTemp}</Text>
                    </View>
                  ))
                : null}
            </View>
          </Overlay>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 70,
    height: 70,
    margin: -5,
  },
});
