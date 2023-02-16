import produce from 'immer';
import 'react-native-get-random-values';
import { create } from 'zustand';
import { storeMetabolicJournal } from '../functions/Posts';

const useMetabolicStore = create((set) => ({
  metabolicJournal: [],
  updateState: (data) => {
    set(
      produce((state) => {
        const { metabolicJournal } = state;
        if (data) {
          data.map((obj) => metabolicJournal.push(obj));
        }
      })
    );
  },
  addJournalEntry: (id, data) => {
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
        storeMetabolicJournal(id, metabolicJournal);
      })
    );
  },
  resetState: () => {
    set({ metabolicJournal: [] });
  },
}));

export default useMetabolicStore;
