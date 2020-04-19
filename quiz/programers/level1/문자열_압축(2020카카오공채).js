function solution(s) {
  let compressString = [];
  for (let i = 0; i < s.length / 2; i++) {
    compressString.push(s);
    let checkCount = 0;
    for (let j = 0, keyString = ''; j < s.length; j += i + 1) {
      if (keyString === s.substr(j, i + 1)) {
        checkCount++;
      } else if (keyString !== s.substr(j, i + 1) && keyString !== '' && checkCount !== 0) {
        compressString[i] = compressString[i].replace(
          getRepeatString(keyString, checkCount + 1),
          `${checkCount + 1}${keyString}`
        );
        keyString = s.substr(j, i + 1);
        checkCount = 0;
      } else if (keyString === '' || checkCount === 0) {
        keyString = s.substr(j, i + 1);
      }
      if (j + i + 1 >= s.length && checkCount !== 0) {
        console.log(keyString);
        compressString[i] = compressString[i].replace(
          getRepeatString(keyString, checkCount + 1),
          `${checkCount + 1}${keyString}`
        );
      }
    }
  }
  return getMinimumLength(compressString);
}

function getRepeatString(repeatString, repeatNumber) {
  let outputString = '';
  for (let i = 0; i < repeatNumber; i++) {
    outputString += repeatString;
  }
  return outputString;
}

function getMinimumLength(inputStringArray) {
  let checkNumber = inputStringArray[0].length;
  for (let i = 1; i < inputStringArray.length; i++) {
    if (inputStringArray[i].length < checkNumber) {
      checkNumber = inputStringArray[i].length;
    }
  }
  return checkNumber;
}

console.log(solution('xababcdcdababcdcd'));
