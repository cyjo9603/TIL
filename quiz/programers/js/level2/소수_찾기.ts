function solution(inputNumber: string): number {
  const inputNumberArray: string[] = inputNumber.split('');
  const maximumNumber: number = getMaximumNumber(inputNumberArray);
  const primeNumberList: number[] = getPrimeNumberList(maximumNumber);
  const answer: number[] = deleteInvalidNumber(primeNumberList, inputNumberArray);
  return answer.length;
}

function deleteInvalidNumber(primeNumberList: number[], inputNumberArray: string[]): number[] {
  return primeNumberList.filter((element: number): boolean => {
    const list: string[] = String(element).split('');
    const keyList = [...inputNumberArray];
    let count: number = 0;
    for (let value of list) {
      for (let j = 0; j < keyList.length; j++) {
        if (value === keyList[j]) {
          keyList[j] = 'pass';
          count++;
          break;
        }
      }
    }
    return list.length === count;
  });
}

function getPrimeNumberList(inputNumber: number): number[] {
  const primeNumber: number[] = [];
  for (let i: number = 0; i < inputNumber + 1; i++) {
    primeNumber.push(i);
  }

  for (let i: number = 2; i * i < inputNumber; i++) {
    for (let j: number = i * i; j <= inputNumber; j += i) {
      primeNumber[j] = 0;
    }
  }

  return primeNumber.filter((value: number): boolean => value !== 0 && value !== 1);
}

function getMaximumNumber(inputNumberArray: string[]): number {
  return parseInt(
    inputNumberArray.sort((a: string, b: string): number => parseInt(b) - parseInt(a)).join('')
  );
}
console.log(solution('17'));
//console.log(String(112).split(''));
