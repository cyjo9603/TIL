function romanNumerals(inputNumber) {
  let romanNumber = '';
  const romanArray = [
    ['M', 1000],
    ['D', 500],
    ['C', 100],
    ['L', 50],
    ['X', 10],
    ['V', 5],
    ['I', 1],
  ];
  for (let i = 0; i < romanArray.length; i++) {
    while (inputNumber >= romanArray[i][1]) {
      inputNumber -= romanArray[i][1];
      romanNumber += romanArray[i][0];
    }
    if (i % 2 === 0 && i < 5 && inputNumber / romanArray[i + 2][1] >= 9) {
      inputNumber -= romanArray[i + 2][1] * 9;
      romanNumber += romanArray[i + 2][0] + romanArray[i][0];
    } else if (i % 2 === 1 && i < 6 && inputNumber / romanArray[i + 1][1] >= 4) {
      inputNumber -= romanArray[i + 1][1] * 4;
      romanNumber += romanArray[i + 1][0] + romanArray[i][0];
    }
  }
  return romanNumber;
}

console.log(romanNumerals(579));
