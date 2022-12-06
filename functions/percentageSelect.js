export default function percentageSelect(startValue, endValue, incrementValue) {
  const array = [];
  for (let i = startValue; i <= endValue; i += incrementValue) {
    array.push(`${i}%`);
  }
  return array;
}
