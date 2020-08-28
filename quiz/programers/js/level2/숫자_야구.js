function solution(baseball) {
  let count = 0;
  for (let i = 123; i < 988; i++) {
    if (checkLikelihood(baseball, i)) {
      count++;
    }
  }
  return count;
}

function checkLikelihood(baseball, inputNumber) {
  const splitNumber = getSplitNumber(inputNumber);
  if (!inputNumberCheck(splitNumber)) {
    return false;
  }
  for (let list of baseball) {
    const caseNumber = getSplitNumber(list[0]);
    let [strike, ball] = [0, 0];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (splitNumber[i] === caseNumber[j]) {
          i === j ? strike++ : ball++;
        }
      }
    }
    if (list[1] !== strike || list[2] !== ball) {
      return false;
    }
  }
  return true;
}

function inputNumberCheck(inputNumberList) {
  if (
    inputNumberList.includes(0) ||
    inputNumberList[0] === inputNumberList[1] ||
    inputNumberList[0] === inputNumberList[2] ||
    inputNumberList[1] === inputNumberList[2]
  ) {
    return false;
  }
  return true;
}

function getSplitNumber(inputNumber) {
  return String(inputNumber)
    .split('')
    .map((value) => Number(value));
}
