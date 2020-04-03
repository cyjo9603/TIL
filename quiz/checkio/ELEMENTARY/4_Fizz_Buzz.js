function fizzBuzz(number) {
  let outputString;
  if (number % 15 === 0) {
    outputString = 'Fizz Buzz';
  } else if (number % 3 === 0) {
    outputString = 'Fizz';
  } else if (number % 5 === 0) {
    outputString = 'Buzz';
  } else {
    outputString = '' + number;
  }
  return outputString;
}
