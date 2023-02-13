import produce from 'immer';
import { create } from 'zustand';
import freetobeApi from '../screens/freetobeApi';

const useAuthStore = create((set) => ({
  isSignedIn: false,
  errorMessage: '',

  signin: (email, password) => {
    set(produce((state) => {}));
  },
  signup: (values) => {
    set(
      produce(async (state) => {
        try {
          const response = await freetobeApi.post('/signup', values);
          state.setErrorMessage('');
          console.log(response.data);
        } catch (err) {
          console.log(err);
          state.setErrorMessage('Something went wrong with sign up');
          console.log(state.errorMessage);
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
}));

export default useAuthStore;
