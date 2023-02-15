/* eslint-disable no-use-before-define */
import { Button, Text, useTheme } from '@rneui/themed';
import moment from 'moment';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import useGoalUpdateConditions from '../../functions/goalUpdateConditions';
import useStore from '../../state/Store';
import useThreeDayLogStore from '../../state/ThreeDayLogStore';
import useTrackerStore from '../../state/TrackerStore';
import Instagram from './instagram/Instagram';
import MacroPie from './MacroPie';
import Table from './slideSection/MacroTable';
import ProgressBar from './slideSection/ProgressBar';

import { useGetAllData } from '../../functions/Gets';
import useAuthStore from '../../state/AuthStore';

function HomeTab({ navigation }) {
  const state = useStore();
  const threeDayLogState = useThreeDayLogStore();
  const trackerState = useTrackerStore();
  const statea = useAuthStore();
  console.log(state, 'assessment');

  const { tracker, goalProtein, goalCarbs, goalFat, goalCalories } = trackerState;
  const { complete } = threeDayLogState;
  const { theme } = useTheme();

  const isDataLoaded = useGetAllData();
  useGoalUpdateConditions(complete);

  function getCurrentData(dataArray) {
    const today = moment(new Date()).format('MM/DD/YYYY');
    const todayObject = dataArray.find((item) => item.date === today);
    if (todayObject) {
      return todayObject;
    }
    return {
      calories: 0,
      carbs: 0,
      protein: 0,
      fats: 0,
    };
  }
  const { carbs, protein, fats, calories } = getCurrentData(tracker);

  if (!isDataLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#AD745D' }}>
      <ScrollView>
        {/* Swipe Section */}
        <View
          style={[
            styles.container,
            {
              backgroundColor: theme.colors.secondary,
            },
          ]}
        >
          <Swiper
            style={{ height: 300, justifyContent: 'center' }}
            activeDotColor="white"
            loop={false}
          >
            {/* Slide 1 */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <View style={{ flex: 1, alignItems: 'center' }}>
                {state.assessment.tdee ? (
                  <MacroPie carbs={carbs} fats={fats} protein={protein} navigation={navigation} />
                ) : (
                  <Button
                    title="Take Assessment"
                    onPress={() => navigation.navigate('HeightWeightAge')}
                  />
                )}
              </View>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Table />
              </View>
            </View>
            {/* Slide 2 */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <View style={{ flex: 1, alignItems: 'center' }}>
                {state.assessment.tdee ? (
                  <View style={{ padding: 20 }}>
                    <ProgressBar
                      color="#B65C3D"
                      title="Energy"
                      unit="kCal"
                      consumed={calories}
                      goal={goalCalories}
                    />
                    <ProgressBar
                      color="#283618"
                      title="Protein"
                      unit="g"
                      consumed={protein}
                      goal={goalProtein}
                    />
                    <ProgressBar
                      color="#F5F5DC"
                      title="Carbs"
                      unit="g"
                      consumed={carbs}
                      goal={goalCarbs}
                    />
                    <ProgressBar
                      color="#800020"
                      title="Fats"
                      unit="g"
                      consumed={fats}
                      goal={goalFat}
                    />
                  </View>
                ) : (
                  <Button
                    title="Take Assessment"
                    onPress={() => navigation.navigate('HeightWeightAge')}
                  />
                )}
              </View>
            </View>
          </Swiper>
        </View>
        {/* Nutrition Info Section */}
        <View
          style={[
            styles.container,
            {
              backgroundColor: theme.colors.secondary,
            },
          ]}
        >
          <View
            style={{
              backgroundColor: theme.colors.primary,
              margin: 12,
              padding: 12,
              flex: 1,
            }}
          >
            <Text h3 h3Style={{ marginBottom: 12 }}>
              Proteins
            </Text>
            <View style={{ marginLeft: 12 }}>
              <Text style={{ marginBottom: 12 }}>- Helps repair muscle tissue</Text>
              <Text style={{ marginBottom: 12 }}>- Helps repair muscle tissue</Text>
              <Text style={{ marginBottom: 12 }}>- Helps repair muscle tissue</Text>
            </View>
          </View>
        </View>
        {/* Instagram Feed Section */}
        <View
          style={[
            styles.container,
            {
              backgroundColor: theme.colors.secondary,
            },
          ]}
        >
          <View
            style={{
              backgroundColor: theme.colors.primary,
              margin: 12,
              padding: 12,
              flex: 1,
              height: 320,
              width: 320,
            }}
          >
            <Instagram />
          </View>
        </View>
        {/* Blog Feed Section */}
        <View
          style={[
            styles.container,
            {
              backgroundColor: theme.colors.secondary,
            },
          ]}
        >
          <View
            style={{
              backgroundColor: theme.colors.primary,
              margin: 12,
              padding: 12,
              flex: 1,
            }}
          >
            <Text h3 h3Style={{ marginBottom: 12 }}>
              Blog Feed
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    margin: 12,
    padding: 12,
    flex: 1,
    justifyContent: 'center',
  },
});
