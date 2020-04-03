function checkio(inputArray) {
  inputArray = inputArray.filter(element => {
    if (isNotUnique(inputArray, element)) {
      return [element];
    }
  });
  return inputArray;
}

function isNotUnique(inputArray, element) {
  return !(inputArray.filter(arrayElement => arrayElement === element).length === 1);
}

console.log(checkio([0, 1, 2, 4, 0, 1, 2, 4]));
