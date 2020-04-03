function mostFrequent(inputArray) {
  const arrayCount = [];
  inputArray.sort();
  inputArray.forEach(element => {
    if (arrayCount.length === 0) {
      arrayCount.push([element, 1]);
      return;
    }
    if (arrayCount[arrayCount.length - 1][0] === element) {
      arrayCount[arrayCount.length - 1][1]++;
    } else {
      arrayCount.push([element, 1]);
    }
  });
  arrayCount.sort((array1, array2) => {
    return array2[1] - array1[1];
  });
  return arrayCount[0][0];
}

console.log(mostFrequent(['a', 'a', 'bi', 'bi', 'bi']));
