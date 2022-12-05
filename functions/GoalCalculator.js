// eslint-disable-next-line consistent-return
export const macroGoal = (ideal, avg, macro) => {
  const percentageDifference = (100 * (ideal - avg)) / ((ideal + avg) / 2);

  if (ideal !== avg) {
    if (percentageDifference <= 50) {
      if (avg < ideal) {
        if (macro === 'protein' || macro === 'carbs') {
          return avg + 5;
        }
        if (macro === 'fat') {
          return avg + 2;
        }
      }
      if (avg > ideal) {
        if (macro === 'protein' || macro === 'carbs') {
          return avg - 5;
        }
        if (macro === 'fat') {
          return avg - 2;
        }
      }
    } else if (percentageDifference > 50) {
      if (avg < ideal) {
        if (macro === 'protein' || macro === 'carbs') {
          return avg + 10;
        }
        if (macro === 'fat') {
          return avg + 3;
        }
      }
      if (avg > ideal) {
        if (macro === 'protein' || macro === 'carbs') {
          return avg - 10;
        }
        if (macro === 'fat') {
          return avg - 3;
        }
      }
      // eslint-disable-next-line no-console
    } else return console.log('error calculating macro goal for the week');
  }
};

export const calculateGoalCalories = (
  idealProtein,
  idealCarbs,
  idealFat,
  avgProtein,
  avgCarbs,
  avgFats
) => {
  const total =
    macroGoal(Number(idealProtein), Number(avgProtein), 'protein') * 4 +
    macroGoal(Number(idealCarbs), Number(avgCarbs), 'carbs') * 4 +
    macroGoal(Number(idealFat), Number(avgFats), 'fat') * 9;
  return total;
};

// percentage needs to be in decimal format (ex: 0.3)
export const idealMacro = (tdee, macro, percentage) => {
  if (macro === 'protein') {
    return ((tdee * percentage) / 4).toFixed(2);
  }
  if (macro === 'fat') {
    return ((tdee * percentage) / 9).toFixed(2);
  }
  if (macro === 'carbs') {
    return ((tdee * percentage) / 4).toFixed(2);
  }
};

export const macroAverage = (array) => {
  const averages = {
    avgCalories: 0,
    avgProtein: 0,
    avgCarbs: 0,
    avgFats: 0,
  };
  let loggedCalories = 0;
  let loggedProtein = 0;
  let loggedCarbs = 0;
  let loggedFat = 0;
  // Instead of length, it needs to be sorting the array by date and getting the last 3 or 7 days
  const days = array.length;

  for (let i = 0; i < days; i++) {
    loggedCalories += array[i].calories;
    loggedProtein += array[i].protein;
    loggedCarbs += array[i].carbs;
    loggedFat += array[i].fats;
  }

  const calculateAverages = (calories, protein, carbs, fats, numberOfDays) => {
    averages.avgCalories = (calories / numberOfDays).toFixed(2);
    averages.avgProtein = (protein / numberOfDays).toFixed(2);
    averages.avgCarbs = (carbs / numberOfDays).toFixed(2);
    averages.avgFats = (fats / numberOfDays).toFixed(2);
  };

  calculateAverages(loggedCalories, loggedProtein, loggedCarbs, loggedFat, days);

  return averages;
};
