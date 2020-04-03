function threeWords(inputString) {
  const array1 = [''];
  inputString = Array.from(inputString);
  inputString.forEach(element => {
    if (element === ' ') {
      array1.push('');
      return;
    }
    array1[array1.length - 1] += element;
  });

  if (threeCheck(array1)) {
    return true;
  } else {
    return false;
  }
}

function threeCheck(inputArray) {
  let count = 0;
  for (let key in inputArray) {
    if (wordsCheck(inputArray[key])) {
      count++;
      if (count === 3) {
        return true;
      }
    } else {
      count = 0;
    }
  }
}

function wordsCheck(stringCheck) {
  const PATTERN = /[a-zA-Z]/;
  const arrayCheck = Array.from(stringCheck);
  let count = 0;
  for (let key in arrayCheck) {
    if (PATTERN.test(arrayCheck[key])) {
      count++;
    }
  }
  if (arrayCheck.length === count) {
    return true;
  }
}

console.log(threeWords('bla b1 bla'));
