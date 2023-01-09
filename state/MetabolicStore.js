import create from 'zustand';
import produce from 'immer';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { storeMetabolicJournal } from '../functions/Posts';

const useMetabolicStore = create((set) => ({
  metabolicJournal: [],
  updateState: (data) => {
    set(
      produce((state) => {
        const { metabolicJournal } = state;
        metabolicJournal.push(data);
      })
    );
  },
  addJournalEntry: (data) => {
    set(
      produce((state) => {
        const { metabolicJournal } = state;
        metabolicJournal.push(data);
        storeMetabolicJournal(metabolicJournal);
      })
    );
  },
}));

export default useMetabolicStore;
