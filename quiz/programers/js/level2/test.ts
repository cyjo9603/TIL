function getFactorial(inputNumber: number): number {
  if (inputNumber === 1) return 1;
  return inputNumber * getFactorial(inputNumber - 1);
}

function Permutation() {}
