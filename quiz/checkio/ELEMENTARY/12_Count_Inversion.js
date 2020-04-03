function countInversion(inputArray) {
  let count = 0;
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = i; j < inputArray.length; j++) {
      if (inputArray[i] > inputArray[j] && i !== j) {
        count++;
        [inputArray[i], inputArray[j]] = [inputArray[j], inputArray[i]];
      }
    }
  }
  return count;
}

console.log(countInversion([0, 1, 2, 3]));
