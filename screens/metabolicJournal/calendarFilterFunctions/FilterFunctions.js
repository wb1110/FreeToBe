import moment from 'moment';

export function predictOvulationNextPeriod(data, date) {
  const previousDate = moment(date, 'MM/DD/YYYY').subtract(1, 'days').format('MM/DD/YYYY');
  const filteredData = data.filter((item) => item.date === previousDate);
  if (filteredData.length === 0) {
    const predictedPeriod = moment(date, 'MM/DD/YYYY').add(28, 'days').format('YYYY-MM-DD');
    const predictedOvulation = moment(date, 'MM/DD/YYYY').add(14, 'days').format('YYYY-MM-DD');
    return {
      predictedPeriod,
      predictedOvulation,
    };
  }
  return null;
}

export const filterByPeriod = (data) => {
  const marked = {};
  const filteredData = data.filter((item) => item.period && item.period.menstrualFlow !== '');
  filteredData.forEach((item) => {
    const formatDate = moment(item.date, 'MM/DD/YYYY').format('YYYY-MM-DD');
    const ovulationDate = predictOvulationNextPeriod(data, item.date)?.predictedOvulation;
    const nextPeriodDate = predictOvulationNextPeriod(data, item.date)?.predictedPeriod;
    marked[formatDate] = {
      selected: true,
      selectedColor: '#FF647F',
    };
    marked[ovulationDate] = {
      selected: true,
      selectedColor: '#ADD8E6',
    };
    marked[nextPeriodDate] = {
      selected: true,
      selectedColor: '#FFFFFF',
      selectedTextColor: '#FF647F',
    };
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
