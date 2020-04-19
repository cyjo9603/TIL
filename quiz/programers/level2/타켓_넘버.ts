function solution(numbers: number[], target: number) {
  let count: number = 0;
  for (let i: number = 0; i < Math.pow(2, numbers.length); i++) {
    const targetNumber: number = changeBoolean(setDigits(i.toString(2), numbers.length)).reduce(
      (cal: number, value: boolean, index: number): number => {
        cal += value ? numbers[index] : -numbers[index];
        return cal;
      },
      0
    );
    if (targetNumber === target) {
      count++;
    }
  }
  return count;
}

function changeBoolean(inputString: string): boolean[] {
  return inputString.split('').map((value: string): boolean => (value === '1' ? true : false));
}

function setDigits(inputString: string, length: number): string {
  while (inputString.length !== length) {
    inputString = '0' + inputString;
  }
  return inputString;
}

console.log(solution([1, 1, 1, 1, 1], 3));
