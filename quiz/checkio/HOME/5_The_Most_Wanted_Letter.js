function mostWanted(inputString) {
  let regExp = /^[-,!#$%& 0-9]/;
  let frequency = [];
  let arrayWord = Array.from(inputString);
  arrayWord.forEach((element, index) => {
    let value = 0;
    for (let key in frequency) {
      if (frequency[key][0] === element.toLowerCase()) {
        frequency[key][1]++;
        value = 1;
      }
    }
    if (value == 0 && !regExp.test(element[0])) {
      frequency.push([element.toLowerCase(), 1]);
    }
  });
  frequency.sort((number1, number2) => {
    return number2[1] - number1[1];
  });
  frequency = frequency.filter(element => {
    if (element[1] === frequency[0][1]) {
      return element[0];
    }
  });
  frequency.sort();
  return frequency[0][0];
}

console.log(mostWanted('12345,12345,12345 S 12345,12345'));
