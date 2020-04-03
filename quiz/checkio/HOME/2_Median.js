function median(inputArray) {
  let mdeianNumber;
  inputArray.sort((number1, number2) => {
    return number1 - number2;
  });
  if (inputArray.length % 2 === 1) {
    mdeianNumber = inputArray[inputArray.length / 2 - 0.5];
  } else {
    mdeianNumber = (inputArray[inputArray.length / 2 - 1] + inputArray[inputArray.length / 2]) / 2;
  }
  return mdeianNumber;
}

console.log(median([1, 2, 3, 4, 5]));
