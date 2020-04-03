function firstWord(inputString) {
  const array1 = [''];
  inputString = Array.from(inputString);
  inputString.forEach(element => {
    if (element === ' ') {
      array1.push('');
      return;
    }
    array1[array1.length - 1] += element;
  });
  return array1[0];
}

console.log(firstWord('hello world'));
