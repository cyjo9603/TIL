function solution(dartResult) {
  const dartFormular = splitDart(dartResult);
  dartFormular.forEach((element, index) => {
    const score = getScore(element);
    if (score[1] && index !== 0) {
      dartFormular[index - 1] *= 2;
    }
    dartFormular[index] = score[0];
  });
  return dartFormular.reduce((sum, value) => sum + value, 0);
}

function splitDart(inputResult) {
  const dartValue = [inputResult.substr(0, 1)];
  for (let i = 1; i < inputResult.length; i++) {
    if (inputResult.substr(i, 1).search(/[\d]/) !== -1) {
      if (inputResult.substr(i - 1, 1).search(/[\d]/) !== -1) {
        dartValue[dartValue.length - 1] += inputResult.substr(i, 1);
      } else {
        dartValue.push(inputResult.substr(i, 1));
      }
    } else {
      dartValue[dartValue.length - 1] += inputResult.substr(i, 1);
    }
  }
  return dartValue;
}

function getScore(formula) {
  const splitNumber = parseInt(formula.slice(0, formula.search(/[\D]/)));
  const spiltFormula = Array.from(formula.slice(formula.search(/[\D]/), formula.length));
  let checkStar = false;
  const outputValue = spiltFormula.reduce((value, element) => {
    switch (element) {
      case 'D':
        value = Math.pow(value, 2);
        break;
      case 'T':
        value = Math.pow(value, 3);
        break;
      case '*':
        checkStar = true;
        value *= 2;
        break;
      case '#':
        value *= -1;
        break;
      default:
        break;
    }
    return value;
  }, splitNumber);
  return [outputValue, checkStar];
}

console.log(solution('1D2S3T*'));
