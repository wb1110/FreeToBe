/* eslint-disable no-use-before-define */
import { Button, LinearProgress, Text, useTheme } from '@rneui/themed';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import useGoalUpdateConditions from '../../functions/goalUpdateConditions';
import useStore from '../../state/Store';
import useThreeDayLogStore from '../../state/ThreeDayLogStore';
import MacroPie from './MacroPie';
import Table from './slideSection/MacroTable';
import ProgressBar from './slideSection/ProgressBar';

function HomeTab({ navigation }) {
  const state = useStore();
  const threeDayLogState = useThreeDayLogStore();
  const { complete } = threeDayLogState;
  const { theme } = useTheme();

  useGoalUpdateConditions(complete);

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
          <Swiper showsButtons loop={false}>
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
                  <MacroPie TDEE={state.assessment.tdee} navigation={navigation} />
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
                  <View>
                    <ProgressBar
                      color="#B65C3D"
                      title="Energy"
                      unit="kCal"
                      consumed={1500}
                      goal={2200}
                    />
                    <ProgressBar
                      color="#283618"
                      title="Protein"
                      unit="g"
                      consumed={1500}
                      goal={2200}
                    />
                    <ProgressBar
                      color="#F5F5DC"
                      title="Carbs"
                      unit="g"
                      consumed={1500}
                      goal={2200}
                    />
                    <ProgressBar
                      color="#800020"
                      title="Fats"
                      unit="g"
                      consumed={1500}
                      goal={2200}
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
            }}
          >
            <Text h3 h3Style={{ marginBottom: 12 }}>
              Instagram Feed
            </Text>
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
  },
});
