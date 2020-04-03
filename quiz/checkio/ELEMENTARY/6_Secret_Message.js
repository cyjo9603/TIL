function findMessage(inputString) {
  const REGEXP = /[A-Z]/;
  let outputSting = '';
  Array.from(inputString).filter(element => {
    if (REGEXP.test(element)) {
      outputSting += element;
    }
  });
  return outputSting;
}

console.log(findMessage(''));
