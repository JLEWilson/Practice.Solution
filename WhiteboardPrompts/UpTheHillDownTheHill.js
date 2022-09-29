// write a function that returns the average speed traveled
//given an uphill time, uphill rate, and downhill rate
//uphill time is given in minutes

const aveSpd = (uphillTime, uphillRate, downhillRate) => {
  const distanceUp = uphillTime * uphillRate;
  const downhillTime = distanceUp / downhillRate;
  let data = [];
  for (let i = 0; i < uphillTime || i < downhillTime; i++) {
    if (i < uphillTime) data.push(uphillRate);
    if (i < downhillTime) data.push(downhillRate);
  }
  const totalMph = data.reduce((a, b) => a + b);
  return Math.round((averageTime = totalMph / data.length));
};

console.log(aveSpd(18, 20, 60)); //30
console.log(aveSpd(30, 10, 30)); //15
console.log(aveSpd(30, 8, 21)); //12
