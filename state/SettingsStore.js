import produce from 'immer';
import create from 'zustand';

const useSettingsStore = create((set) => ({
  macroSettings: {
    idealProtein: 5,
    idealCarbs: 5,
    idealFat: 5,
  },
  updateSettings: (data) => {
    set(() => ({ macroSettings: data }));
  },
  updateMacroSettings: (protein, carbs, fat) =>
    set(() => ({ macroSettings: { idealProtein: protein, idealCarbs: carbs, idealFat: fat } })),
}));

export default useSettingsStore;
