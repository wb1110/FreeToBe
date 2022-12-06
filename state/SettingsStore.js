import produce from 'immer';
import create from 'zustand';

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
  updateMacroSettings: (protein, carbs, fat) =>
    set(() => ({ macroSettings: { idealProtein: protein, idealCarbs: carbs, idealFat: fat } })),
}));

export default useSettingsStore;
