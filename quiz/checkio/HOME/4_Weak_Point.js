function weakPoint(inputArray) {
  let sumCol = [],
    sumRow = [];

  arrayFunction(inputArray, (i, j) => {
    if (i === j) {
      sumCol.push(0);
      sumRow.push(0);
    }
  });

  arrayFunction(inputArray, (i, j) => {
    sumCol[i] += inputArray[i][j];
    sumRow[j] += inputArray[i][j];
  });

  return [minimumNumber(sumCol)[0], minimumNumber(sumRow)[0]];
}

function arrayFunction(inputArray, func) {
  for (let i in inputArray) {
    for (let j in inputArray[i]) {
      func(i, j);
    }
  }
}

function minimumNumber(inputNumber) {
  let minimunIndex = [];
  let minimun = inputNumber[0];
  inputNumber.forEach((element, index) => {
    if (element < minimun) {
      minimun = element;
    }
  });
  inputNumber.forEach((element, index) => {
    if (element === minimun) {
      minimunIndex.push(index);
    }
  });
  return minimunIndex;
}

console.log(
  weakPoint([
    [7, 2, 4, 2, 8],
    [2, 8, 1, 1, 7],
    [3, 8, 6, 2, 4],
    [2, 5, 2, 9, 1],
    [6, 6, 5, 4, 5],
  ])
);
