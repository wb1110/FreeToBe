/* eslint-disable global-require */
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@rneui/themed';
import { enableScreens } from 'react-native-screens';
import Welcome from './screens/Welcome';
import HeightWeightAge from './screens/assessment/HeightWeightAge';
import BodyFatPercentage from './screens/assessment/BodyFatPercentage';
import CaliperSites from './screens/assessment/CaliperSites';
import BodyFatKnown from './screens/assessment/BodyFatKnown';
import Pregnant from './screens/assessment/Pregnant';
import Nursing from './screens/assessment/Nursing';
import Goals from './screens/assessment/Goals';
import DietHistory from './screens/assessment/DietHistory';
import FoodPreferences from './screens/assessment/FoodPreferences';
import TrackingHistory from './screens/assessment/TrackingHistory';
import InternalStress from './screens/assessment/InternalStress';
import ExternalStress from './screens/assessment/ExternalStress';
import ActivityLevel from './screens/assessment/ActivityLevel';
import WorkActivityLevel from './screens/assessment/WorkActivityLevel';
import Personality from './screens/assessment/Personality';
import Disclaimer from './screens/assessment/Disclaimer';
import AbleToTrack from './screens/assessment/AbleToTrack';
import LieSkinny from './screens/assessment/LieSkinny';
import LieSkinny2 from './screens/assessment/LieSkinny2';
import LieSkinny3 from './screens/assessment/LieSkinny3';
import LieSkinny4 from './screens/assessment/LieSkinny4';
import UserHome from './screens/UserHome';
import Login from './screens/Login';
import Register from './screens/Register';
import {
  Results1,
  Results2,
  Results3,
  Results4,
  Results5,
  Results6,
} from './screens/threeDayLog/Results';
// Before rendering any navigation stack
enableScreens();

const theme = createTheme({
  colors: {
    primary: '#B65C3D',
    secondary: '#CD947D',
    white: '#F6F7EC',
    error: 'FF0000',
  },
  components: {
    Text: {
      style: {
        fontFamily: 'Inter-Regular',
        color: '#F6F7EC',
        fontSize: 16,
      },
      h1Style: {
        fontFamily: 'Inter-Regular',
        color: '#F6F7EC',
      },
      h2Style: {
        fontFamily: 'Inter-Regular',
        color: '#F6F7EC',
      },
      h3Style: {
        fontFamily: 'Inter-Regular',
        color: '#F6F7EC',
      },
      h4Style: {
        fontFamily: 'Inter-Bold',
        color: '#F6F7EC',
        fontSize: 16,
      },
    },
    Button: {
      titleStyle: {
        fontWeight: 'bold',
        fontSize: 16,
      },
      disabledStyle: {
        backgroundColor: 'grey',
        borderColor: 'grey',
      },
      disabledTitleStyle: {
        color: 'white',
      },
    },
    Input: {
      labelStyle: {
        fontFamily: 'Inter-Bold',
        color: '#F6F7EC',
      },
      inputContainerStyle: {
        borderColor: '#F6F7EC',
        borderWidth: 1,
        borderRadius: 5,
      },
      inputStyle: {
        color: '#F6F7EC',
        textAlign: 'center',
      },
      errorStyle: {
        color: '#8B0000',
        fontWeight: 'bold',
      },
    },
    CheckBox: {
      textStyle: {
        fontFamily: 'Inter-Bold',
        color: '#F6F7EC',
      },
      wrapperStyle: '#F6F7EC',
      checkedColor: '#F6F7EC',
    },
  },
});

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#CD947D',
  },
};

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Light': require('./assets/fonts/Inter-Light.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  onLayoutRootView();

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Register">
            {/* Authentication */}
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            {/* Assessment */}
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="HeightWeightAge" component={HeightWeightAge} />
            <Stack.Screen name="BodyFatPercentage" component={BodyFatPercentage} />
            <Stack.Screen name="BodyFatKnown" component={BodyFatKnown} />
            <Stack.Screen name="CaliperSites" component={CaliperSites} />
            <Stack.Screen name="Pregnant" component={Pregnant} />
            <Stack.Screen name="Nursing" component={Nursing} />
            <Stack.Screen name="Goals" component={Goals} />
            <Stack.Screen name="DietHistory" component={DietHistory} />
            <Stack.Screen name="FoodPreferences" component={FoodPreferences} />
            <Stack.Screen name="TrackingHistory" component={TrackingHistory} />
            <Stack.Screen name="InternalStress" component={InternalStress} />
            <Stack.Screen name="ExternalStress" component={ExternalStress} />
            <Stack.Screen name="ActivityLevel" component={ActivityLevel} />
            <Stack.Screen name="WorkActivityLevel" component={WorkActivityLevel} />
            <Stack.Screen name="Personality" component={Personality} />
            <Stack.Screen name="Disclaimer" component={Disclaimer} />
            <Stack.Screen name="AbleToTrack" component={AbleToTrack} />
            <Stack.Screen name="LieSkinny" component={LieSkinny} />
            <Stack.Screen name="LieSkinny2" component={LieSkinny2} />
            <Stack.Screen name="LieSkinny3" component={LieSkinny3} />
            <Stack.Screen name="LieSkinny4" component={LieSkinny4} />
            {/* Home Tab Navigator */}
            <Stack.Screen name="UserHome" component={UserHome} />
            {/* threeDayLog Results Pages */}
            <Stack.Screen name="Results1" component={Results1} />
            <Stack.Screen name="Results2" component={Results2} />
            <Stack.Screen name="Results3" component={Results3} />
            <Stack.Screen name="Results4" component={Results4} />
            <Stack.Screen name="Results5" component={Results5} />
            <Stack.Screen name="Results6" component={Results6} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
