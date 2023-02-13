import produce from 'immer';
import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import freetobeApi from '../screens/freetobeApi';
import { navigate } from '../screens/navigationRef';
import useStore from './Store';
import {
  getAssessment,
  getMetabolicJournal,
  getSettings,
  getThreeDayLog,
  getTracker,
} from '../functions/Gets';
import ftbnBigLogo from '../assets/icons/ftbnBigLogo.png';
import useSettingsStore from './SettingsStore';
import useTrackerStore from './TrackerStore';
import useThreeDayLogStore from './ThreeDayLogStore';
import useMetabolicStore from './MetabolicStore';

const useAuthStore = create((set) => ({
  token: null,
  errorMessage: '',

  signin: (email, password) => {
    set(produce((state) => {}));
    // navigation.navigate('UserHome', { screen: 'Home' });
    // getAssessment(state);
    // getSettings(settingsState);
    // getTracker(trackerState);
    // getThreeDayLog(threeDayLogState);
    // getMetabolicJournal(metabolicState);
  },
  signup: (values) => {
    set(
      produce(async (state) => {
        const { setToken, setErrorMessage } = state;
        try {
          const response = await freetobeApi.post('/signup', values);
          await AsyncStorage.setItem('token', response.data.token);
          setToken(response.data.token);
          setErrorMessage('');
          navigate('Welcome');
        } catch (err) {
          console.log(err);
          setErrorMessage('Something went wrong with sign up');
        }
      })
    );
  },
  signout: () => {
    set(produce((state) => {}));
  },
  setErrorMessage: (value) => {
    set({ errorMessage: value });
  },
  setToken: (value) => {
    set({ token: value });
  },
}));

export default useAuthStore;
