function digitsMultip(inputNumber) {
  let multip = 1;
  inputNumber = '' + inputNumber;
  Array.from(inputNumber).forEach(element => {
    if (element !== '0') {
      multip *= element;
    }
  });
  return multip;
}

console.log(digitsMultip(123405));
