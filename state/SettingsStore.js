import produce from 'immer';
import { create } from 'zustand';
import { storeSettings } from '../functions/Posts';

const useSettingsStore = create((set) => ({
  macroSettings: {
    idealProtein: '30%',
    idealCarbs: '40%',
    idealFat: '30%',
  },
  // updateSettings: (data) => {
  //   set(() => ({ macroSettings: data }));
  // },
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
  // clearSettings: () => set({ macroSettings: 0 }),
  updateMacroSettings: (id, protein, carbs, fat) => {
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
