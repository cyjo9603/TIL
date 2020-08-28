function solution(arr: number[]) {
  const list: number[] = [];

  for (let i = 2; i <= Math.max(...arr); i++) {
    while (true) {
      let check: boolean = false;
      for (let j = 0; j < arr.length; j++) {
        if ((arr[j] / i) % 1 === 0) {
          check = true;
          arr[j] /= i;
        }
      }
      if (check) list.push(i);
      else break;
    }
  }
  return arr.reduce((mulip: number, value: number): number => mulip * value) * list.reduce((mulip: number, value: number): number => mulip * value);
}

console.log(solution([1, 2]));
