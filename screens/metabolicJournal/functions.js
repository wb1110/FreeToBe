const createNewData = (date) => ({
  date,
  weight: 0,
  journal: '',
  sleep: [],
  temperature: {
    wakingTemp: 0,
    meals: [
      // {
      //   mealName: '',
      //   preMealTemp: 0,
      //   postMealTemp: 0,
      // },
    ],
  },
  pulse: 0,
  mood: [],
  sex: [],
  bowelMovements: [],
  period: {
    symptoms: [],
    mentrualFlow: '',
  },
  fertility: {
    pregnancyTest: '',
    ovulation: '',
  },
  physicalActivity: [],
  skin: [],
  hair: [],
  nails: [],
});

export default createNewData;
