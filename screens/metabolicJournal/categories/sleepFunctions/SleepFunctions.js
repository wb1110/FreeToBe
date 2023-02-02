import moment from 'moment';

const calculateTotal = (sleepData) => {
  let newTotal = 0;
  sleepData.forEach((item) => {
    const time1 = moment(item.startTime, 'h:mm a');
    const time2 = moment(item.endTime, 'h:mm a');
    newTotal += time2.diff(time1, 'minutes');
  });
  const hours = newTotal / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return `${rhours}h ${rminutes}min`;
};

export default calculateTotal;
