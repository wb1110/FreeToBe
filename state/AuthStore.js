import produce from 'immer';
import { create } from 'zustand';
import freetobeApi from '../screens/freetobeApi';

const useAuthStore = create((set) => ({
  isSignedIn: false,

  signin: (email, password) => {
    set(produce((state) => {}));
  },
  signup: (values) => {
    set(
      produce(async (state) => {
        try {
          const response = await freetobeApi.post('/signup', values);
          console.log(response.data);
        } catch (err) {
          console.log(err.message);
        }
      })
    );
  },
  signout: () => {
    set(produce((state) => {}));
  },
}));

export default useAuthStore;
