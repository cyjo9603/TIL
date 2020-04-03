function longRepeat(inputString) {
  if (inputString === '') {
    return 0;
  }
  let arrayString = [];
  Array.from(inputString).forEach(element => {
    if (arrayString.length === 0) {
      arrayString.push([element, 1]);
    } else {
      if (arrayString[arrayString.length - 1][0] === element) {
        arrayString[arrayString.length - 1][1]++;
      } else {
        arrayString.push([element, 1]);
      }
    }
  });

  arrayString.sort((arr1, arr2) => {
    return arr2[1] - arr1[1];
  });
  return arrayString[0][1];
}
console.log(longRepeat(''));
