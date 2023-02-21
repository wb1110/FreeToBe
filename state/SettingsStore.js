import produce from 'immer';
import { create } from 'zustand';
import { storeSettings } from '../functions/Posts';

const useSettingsStore = create((set) => ({
  macroSettings: {
    idealProtein: '30%',
    idealCarbs: '40%',
    idealFat: '30%',
  },
  updateSettings: (data) => {
    set(
      produce((state) => {
        const { macroSettings } = state;
        if (data) {
          Object.assign(macroSettings, data);
        } else {
          Object.assign(macroSettings, {
            idealProtein: '30%',
            idealCarbs: '40%',
            idealFat: '30%',
          });
        }
      })
    );
  },
  updateMacroSettings: (id, protein, carbs, fat) => {
    console.log(protein, carbs, fat, 'updateMacroSettings');
    set(
      produce((state) => {
        storeSettings(id, { idealProtein: protein, idealCarbs: carbs, idealFat: fat });
        state.setMacros({ idealProtein: protein, idealCarbs: carbs, idealFat: fat });
      })
    );
  },
  setMacros: (value) => {
    set(
      produce((state) => {
        console.log(value, 'setMacros');
        state.macroSettings = value;
      })
    );
  },
  resetState: () => {
    set({
      macroSettings: {
        idealProtein: '30%',
        idealCarbs: '40%',
        idealFat: '30%',
      },
    });
  },
}));

export default useSettingsStore;
