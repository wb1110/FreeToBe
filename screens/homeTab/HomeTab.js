/* eslint-disable no-use-before-define */
import { Text, useTheme } from '@rneui/themed';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import getTodaysTrackerData from '../../functions/getTodaysTrackerData';
import useGoalUpdateConditions from '../../functions/goalUpdateConditions';
import useStore from '../../state/Store';
import useThreeDayLogStore from '../../state/ThreeDayLogStore';
import useTrackerStore from '../../state/TrackerStore';
import Instagram from './instagram/Instagram';

import { useGetAllData } from '../../functions/Gets';
import CMS from './cms/CMS';
import Slide1 from './slideSection/Slide1';
import Slide2 from './slideSection/Slide2';
import Slide3 from './slideSection/Slide3';

function HomeTab() {
  const threeDayLogState = useThreeDayLogStore();
  const trackerState = useTrackerStore();

  const { tracker, goalProtein, goalCarbs, goalFat, goalCalories } = trackerState;
  const { complete } = threeDayLogState;
  const { theme } = useTheme();

  const isDataLoaded = useGetAllData();
  useGoalUpdateConditions(complete);

  const { carbs, protein, fats, calories } = getTodaysTrackerData(tracker);

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
            {/* Pie Chart and Table */}
            <Slide1 carbs={carbs} protein={protein} fats={fats} calories={calories} />
            {/* Macro Progress Bars */}
            <Slide2
              calories={calories}
              goalCalories={goalCalories}
              protein={protein}
              goalProtein={goalProtein}
              carbs={carbs}
              fats={fats}
              goalCarbs={goalCarbs}
              goalFat={goalFat}
            />
            <Slide3 />
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
          <CMS />
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
