import { create } from 'zustand';
import produce from 'immer';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { storeMetabolicJournal } from '../functions/Posts';

const useMetabolicStore = create((set) => ({
  metabolicJournal: [],
  updateState: (data) => {
    set(
      produce((state) => {
        // eslint-disable-next-line no-param-reassign
        state.metabolicJournal = data;
      })
    );
  },
  addJournalEntry: (data) => {
    set(
      produce((state) => {
        const { metabolicJournal } = state;
        const existingEntryIndex = metabolicJournal.findIndex((entry) => entry.date === data.date);
        if (existingEntryIndex >= 0) {
          // If date already exists, replace the existing entry
          metabolicJournal[existingEntryIndex] = data;
        } else {
          // If date doesn't exist, add new entry
          metabolicJournal.push(data);
        }
        storeMetabolicJournal(metabolicJournal);
      })
    );
  },
  resetState: () => {
    set({ metabolicJournal: [] });
  },
}));

export default useMetabolicStore;
