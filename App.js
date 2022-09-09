import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@rneui/themed';
import Gender from './screens/assessment/Gender';
import HeightWeightAge from './screens/assessment/HeightWeightAge';
import Home from './screens/Home';
import BodyFatPercentage from './screens/assessment/BodyFatPercentage';
import CaliperSites from './screens/assessment/CaliperSites';
import BodyFatKnown from './screens/assessment/BodyFatKnown';
import Pregnant from './screens/assessment/Pregnant';
import Nursing from './screens/assessment/Nursing';

const theme = createTheme({
  colors: {
    primary: '#893F04',
    secondary: '#989E8B',
  },
});

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Light': require('./assets/fonts/Inter-Light.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf')
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
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Gender" component={Gender} />
            <Stack.Screen name="HeightWeightAge" component={HeightWeightAge} />
            <Stack.Screen name="BodyFatPercentage" component={BodyFatPercentage} />
            <Stack.Screen name="BodyFatKnown" component={BodyFatKnown} />
            <Stack.Screen name="CaliperSites" component={CaliperSites} />
            <Stack.Screen name="Pregnant" component={Pregnant} />
            <Stack.Screen name="Nursing" component={Nursing} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}