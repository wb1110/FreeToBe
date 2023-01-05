import create from 'zustand';
import produce from 'immer';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { storeTracker } from '../functions/Posts';

const useMetabolicStore = create((set) => ({
  metabolicJournal: [],
  addJournalEntry: (data) => {
    set(
      produce((state) => {
        const { metabolicJournal } = state;
        metabolicJournal.push(data);
      })
    );
  },
}));

export default useMetabolicStore;
