/* eslint-disable no-console */
import AsyncStorage from '@react-native-async-storage/async-storage';
import produce from 'immer';
import { create } from 'zustand';
import freetobeApi from '../screens/freetobeApi';
import { navigate } from '../screens/navigationRef';

const useAuthStore = create((set) => ({
  token: null,
  errorMessage: '',
  id: '',

  tryLocalSignin: () => {
    set(
      produce(async (state) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          const id = await AsyncStorage.getItem('currentUserID');
          state.setid(id);
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
          const value = await AsyncStorage.getItem(response.data.id);
          if (value === null) {
            await AsyncStorage.setItem(response.data.id, '{}');
            setid(response.data.id);
          }
          // const jsonValue = JSON.stringify({ token: response.data.token });
          // await AsyncStorage.mergeItem(response.data.id, jsonValue);
          await AsyncStorage.setItem('currentUserID', response.data.id);
          await AsyncStorage.setItem('token', response.data.token);
          setToken(response.data.token);
          setid(response.data.id);
          setErrorMessage('');
          navigate('UserHome', { screen: 'Home' });
        } catch (err) {
          if (err.response.data.error) {
            console.log(err.response.data.error);
            setErrorMessage(err.response.data.error);
          }
          console.log(err);
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
          await AsyncStorage.setItem(response.data.id, '{}');
          await AsyncStorage.setItem('currentUserID', response.data.id);
          await AsyncStorage.setItem('token', response.data.token);
          setToken(response.data.token);
          setid(response.data.id);
          setErrorMessage('');
          navigate('Welcome');
        } catch (err) {
          console.log(err.data);
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
        await AsyncStorage.removeItem('currentUserID');
        setToken(null);
        navigate('Login');
      })
    );
  },
  getEmail: (id, setEmail) => {
    set(
      produce(async () => {
        try {
          const response = await freetobeApi.get(`/users/${id}/email`);
          setEmail(response.data.email);
        } catch (err) {
          console.log(err);
        }
      })
    );
  },
  updateEmail: (id, newEmail, setEmail) => {
    set(
      produce(async () => {
        try {
          await freetobeApi.put(`/users/${id}/email`, {
            email: newEmail,
          });
          setEmail(newEmail);
        } catch (err) {
          console.log(err);
        }
      })
    );
  },
  updatePassword: (id, currentPassword, newPassword) => {
    set(
      produce(async () => {
        try {
          await freetobeApi.put(`/users/${id}/password`, {
            password: currentPassword,
            newPassword,
          });
        } catch (err) {
          console.log(err);
        }
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
    set(
      produce((state) => {
        state.id = value;
      })
    );
  },
  resetState: () => {
    set({ token: null, errorMessage: '', id: '' });
  },
}));

export default useAuthStore;
