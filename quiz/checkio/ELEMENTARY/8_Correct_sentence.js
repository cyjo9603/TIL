function correctSentence(inputString) {
  let output = '';
  inputString = Array.from(inputString);
  inputString[0] = inputString[0].toUpperCase();
  if (inputString[inputString.length - 1] !== '.') {
    inputString.push('.');
  }
  inputString.forEach(element => {
    output += element;
  });
  return output;
}

console.log(correctSentence('asdfsdf, dfa.'));
