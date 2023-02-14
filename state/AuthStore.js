import AsyncStorage from '@react-native-async-storage/async-storage';
import produce from 'immer';
import { create } from 'zustand';
import freetobeApi from '../screens/freetobeApi';
import { navigate } from '../screens/navigationRef';

const useAuthStore = create((set) => ({
  token: null,
  errorMessage: '',
  id: null,

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
        const { setToken, setErrorMessage, setid } = state;
        try {
          const response = await freetobeApi.post('/signin', values);
          // Check if the id already exists in storage
          const jsonValue = JSON.stringify(response.data.id);
          const value = await AsyncStorage.getItem(jsonValue);
          if (value === null) {
            // If it does not exist, add the id key to storage
            await AsyncStorage.setItem(jsonValue, '{}');
            setid(response.data.id);
          }
          await AsyncStorage.setItem('token', response.data.token);
          setToken(response.data.token);
          setid(response.data.id);
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
        const { setToken, setErrorMessage, setid } = state;
        try {
          const response = await freetobeApi.post('/signup', values);
          const jsonValue = JSON.stringify(response.data.id);
          await AsyncStorage.setItem(jsonValue, '{}');
          await AsyncStorage.setItem('token', response.data.token);
          setToken(response.data.token);
          setid(response.data.id);
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
    set(
      produce(async (state) => {
        const { setToken } = state;
        await AsyncStorage.removeItem('token');
        setToken(null);
        navigate('Login');
      })
    );
  },
  setErrorMessage: (value) => {
    set({ errorMessage: value });
  },
  setToken: (value) => {
    set({ token: value });
  },
  setid: (value) => {
    set({ id: value });
  },
}));

export default useAuthStore;
