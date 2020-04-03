function fastTrain() {
  const arrayTrain = Array.from(arguments[0]);
  let speedNow = 0,
    residualDistance = 0,
    totalTime = 0;
  arrayTrain.forEach(element => (residualDistance += element[0]));

  while (residualDistance !== 0) {
    speedNow = selectSpeed(arrayTrain, residualDistance, speedNow);
    residualDistance -= speedNow;
    totalTime++;
    console.log(speedNow);
  }
  return totalTime;
}

function selectSpeed(arrayTrain, residualDistance, speedNow) {
  if (checkRoute(arrayTrain, residualDistance, speedNow)) {
  }
  return speedNow;
}

function checkRoute(arrayTrain, residualDistance, speedNow) {
  for (let i = 0; i < arrayTrain.length; i++) {}
}

console.log(
  fastTrain([
    [5, 5],
    [4, 2],
  ])
);
