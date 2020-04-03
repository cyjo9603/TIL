function evenLast(inputArray) {
  let multip = 0;
  if (inputArray.length === 0) {
    return 0;
  }

  inputArray.forEach((element, index) => {
    if (index % 2 === 0) {
      multip += element;
    }
  });

  return multip * inputArray[inputArray.length - 1];
}

console.log(evenLast([0, 1, 2, 3, 4, 5]));
