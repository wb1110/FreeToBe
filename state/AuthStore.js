import AsyncStorage from '@react-native-async-storage/async-storage';
import produce from 'immer';
import { create } from 'zustand';
import freetobeApi from '../screens/freetobeApi';
import { navigate } from '../screens/navigationRef';

const useAuthStore = create((set) => ({
  token: null,
  errorMessage: '',

  tryLocalSignin: () => {
    set(
      produce(async (state) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          state.setToken(token);
          navigate('UserHome', { screen: 'Home' });
        } else {
          navigate('Register');
        }
      })
    );
  },

  signin: (values) => {
    set(
      produce(async (state) => {
        const { setToken, setErrorMessage } = state;
        try {
          const response = await freetobeApi.post('/signin', values);
          await AsyncStorage.setItem('token', response.data.token);
          setToken(response.data.token);
          setErrorMessage('');
          navigate('UserHome', { screen: 'Home' });
        } catch (err) {
          console.log(err);
          setErrorMessage('Something went wrong with sign in');
        }
      })
    );
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
