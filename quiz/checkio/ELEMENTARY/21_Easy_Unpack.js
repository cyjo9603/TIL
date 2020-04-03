function easyUnpack(inputArray) {
  const outputArray = [];
  outputArray.push(inputArray[0]);
  outputArray.push(inputArray[2]);
  outputArray.push(inputArray[inputArray.length - 2]);

  return outputArray;
}

console.log(easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]));
