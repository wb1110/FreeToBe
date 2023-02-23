import moment from 'moment';

function getTodaysTrackerData(dataArray) {
  const today = moment(new Date()).format('MM/DD/YYYY');
  const todayObject = dataArray.find((item) => item.date === today);
  if (todayObject) {
    return todayObject;
  }
  return {
    calories: 0,
    carbs: 0,
    protein: 0,
    fats: 0,
  };
}

export default getTodaysTrackerData;
