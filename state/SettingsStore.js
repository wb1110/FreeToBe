import produce from 'immer';
import create from 'zustand';

const useSettingsStore = create((set) => ({
  macroSettings: {
    idealProtein: 0.3,
    idealCarbs: 0.4,
    idealFat: 0.3,
  },
  updateSettings: (data) => {
    set(() => ({ macroSettings: data }));
  },
  // clearSettings: () => set({ macroSettings: 0 }),
  updateMacroSettings: (protein, carbs, fat) =>
    set(() => ({ macroSettings: { idealProtein: protein, idealCarbs: carbs, idealFat: fat } })),
}));

export default useSettingsStore;
