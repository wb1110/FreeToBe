import moment from 'moment';

const calculateTotal = (sleepData) => {
  let newTotal = 0;
  sleepData.forEach((item) => {
    const time1 = moment(item.startTime, 'h:mm a');
    const time2 = moment(item.endTime, 'h:mm a');
    newTotal += time2.diff(time1, 'hours');
  });
  return newTotal;
};

export default calculateTotal;
