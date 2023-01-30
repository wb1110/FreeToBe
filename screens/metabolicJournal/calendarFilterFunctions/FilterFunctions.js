import moment from 'moment';

// Passing the metabolic journal array and one of the period dates
export function predictOvulationNextPeriod(data, date) {
  // Creates a previous day variable based on the period date passed in
  const previousDate = moment(date, 'MM/DD/YYYY').subtract(1, 'days').format('MM/DD/YYYY');
  // If there is no period recorded on the previous day of the current recorded day, then it must be the first period.
  const filteredData = data.filter((item) => item.date === previousDate);
  if (filteredData.length > 0) {
    return null;
  }
  const predictedPeriod = moment(date, 'MM/DD/YYYY').add(28, 'days').format('YYYY-MM-DD');
  const predictedOvulation = moment(date, 'MM/DD/YYYY').add(14, 'days').format('YYYY-MM-DD');
  return {
    predictedPeriod,
    predictedOvulation,
  };
}

export function getOvulationWindowRange(ovulationDate) {
  const start = moment(ovulationDate, 'YYYY-MM-DD').subtract(5, 'days').format('YYYY-MM-DD');
  const end = moment(ovulationDate, 'YYYY-MM-DD').add(3, 'days').format('YYYY-MM-DD');
  const dates = [];

  let current = start;
  while (current <= end) {
    dates.push(current);
    current = moment(current, 'YYYY-MM-DD').add(1, 'days').format('YYYY-MM-DD');
  }

  return dates;
}

export const filterByPeriod = (data) => {
  const marked = {};
  // Filters the metabolic journal by only days where a period is recorded
  const periodDaysArray = data.filter((item) => item.period && item.period.menstrualFlow !== '');
  // Creates a marked object for period days, ovulation date, and predicting the next period
  periodDaysArray.forEach((item) => {
    // Formats to react-native-calendar date format
    const formatDate = moment(item.date, 'MM/DD/YYYY').format('YYYY-MM-DD');
    // Predicts an ovulation date based on the metabolic journal array and the current period date
    const ovulationDate = predictOvulationNextPeriod(
      periodDaysArray,
      item.date
    )?.predictedOvulation;
    const nextPeriodDate = predictOvulationNextPeriod(data, item.date)?.predictedPeriod;
    marked[formatDate] = {
      selected: true,
      selectedColor: '#FF647F',
    };
    marked[ovulationDate] = {
      selected: true,
      selectedColor: 'white',
      customStyles: {
        container: {
          backgroundColor: 'white',
          borderColor: 'blue',
          borderWidth: 2,
          borderStyle: 'dotted',
        },
        text: {
          color: 'blue',
          fontWeight: 'bold',
        },
      },
    };
    marked[nextPeriodDate] = {
      selected: true,
      selectedColor: 'white',
      customStyles: {
        container: {
          backgroundColor: 'white',
          borderColor: '#FF647F',
          borderWidth: 2,
          borderStyle: 'dotted',
        },
        text: {
          color: '#FF647F',
          fontWeight: 'bold',
        },
      },
    };
  });
  return marked;
};

export const filterByOvulationWindow = (data) => {
  const marked = {};
  const periodDaysArray = data.filter((item) => item.period && item.period.menstrualFlow !== '');

  periodDaysArray.forEach((item) => {
    const ovulationDate = predictOvulationNextPeriod(
      periodDaysArray,
      item.date
    )?.predictedOvulation;
    if (ovulationDate) {
      const windowDates = getOvulationWindowRange(ovulationDate);
      windowDates.forEach((date) => {
        marked[date] = {
          selected: true,
          selectedTextColor: 'blue',
          selectedColor: 'white',
        };
      });
    }
  });

  return marked;
};

export const filterByUnprotectedSex = (data) => {
  const marked = {};
  const filteredData = data.filter((item) => item.sex.includes('Unprotected Sex'));
  filteredData.forEach((item) => {
    const formatDate = moment(item.date, 'MM/DD/YYYY').format('YYYY-MM-DD');
    marked[formatDate] = {
      marked: true,
      dotColor: 'red',
    };
  });
  return marked;
};
