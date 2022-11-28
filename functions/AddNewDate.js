import moment from 'moment';

const addNewDate = (date, setDateData, indexExists, tracker, addDate) => {
  const selectedDate = moment(date).format('L');
  setDateData(selectedDate);
  const savedDate = tracker[indexExists(tracker, selectedDate)];
  if (!savedDate) {
    addDate(selectedDate);
  }
};

export default addNewDate;
