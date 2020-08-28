function solution(listA: number[], listB: number[]) {
  const length: number = listA.length;
  let sum: number = 0;
  listA.sort((a: number, b: number): number => a - b);
  listB.sort((a: number, b: number): number => b - a);
  for (let i = 0; i < length; i++) sum += listA[i] * listB[i];
  return sum;
}

console.log(solution([1, 4, 2], [5, 4, 4]));
