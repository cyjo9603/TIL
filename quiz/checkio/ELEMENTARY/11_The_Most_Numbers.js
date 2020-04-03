function mostNumbers() {
  const array1 = Array.from(arguments);
  array1.sort((number1, number2) => {
    return number2 - number1;
  });
  const output = Math.round((array1[0] - array1[array1.length - 1]) * 1000) / 1000;
  if (!isNaN(output)) {
    return output;
  }
  return 0;
}

console.log(mostNumbers(10.2, -2.2, 0, 1.1, 0.5));
