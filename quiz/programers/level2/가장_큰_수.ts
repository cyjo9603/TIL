function solution(inputList: number[]): string {
  if (inputList.reduce((sum: number, value: number): number => sum + value, 0) === 0) {
    return '0';
  }
  let answer: string = '';
  const list = inputList
    .map((value: number): string => String(value))
    .sort()
    .reverse()
    .reduce(
      (arr: string[][], value: string): string[][] => {
        if (arr[arr.length - 1].length === 0 || arr[arr.length - 1][0][0] === value[0]) {
          arr[arr.length - 1].push(value);
        } else {
          arr.push([value]);
        }
        return arr;
      },
      [[]]
    );
  for (let i of list) {
    if (i.length > 1) {
      i.sort((a: string, b: string): number => parseInt(b + a) - parseInt(a + b));
    }
  }

  return list.join('').replace(/,/gi, '');
}

console.log(solution([0, 0, 0, 0]));
