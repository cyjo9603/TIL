function solution(arr: number[]): number {
  const picked: number[] = [];
  let count: number = 0;

  function find() {
    if (picked.length === 3) {
      const currentSum: number = picked.reduce((sum: number, index: number): number => sum + arr[index], 0);
      if (isPrimeNumber(currentSum)) count++;
      return;
    }
    const start: number = picked.length ? picked[picked.length - 1] + 1 : 0;
    for (let i: number = start; i < arr.length; i++) {
      picked.push(i);
      find();
      picked.pop();
    }
  }
  find();
  return count;
}

function isPrimeNumber(checkNumber: number) {
  for (let i: number = 2; i < checkNumber; i++) if (checkNumber % i === 0) return false;
  return true;
}

console.log(solution([1, 2, 7, 6, 4]));
