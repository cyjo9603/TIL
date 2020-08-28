function solution(n: number) {
  let count: number = 0;
  for (let i: number = 1; i <= n; i++) {
    let sum: number = 0;
    for (let j: number = i; j <= n; j++) {
      sum += j;
      if (sum === n) {
        count++;
        break;
      } else if (sum > n) break;
    }
  }
  return count;
}
