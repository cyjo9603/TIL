function solution(n: number) {
  if (n === 1) return 1;
  const fibonacciList = [0, 1];
  for (let i: number = 2; i <= n; i++) fibonacciList.push((fibonacciList[i - 2] % 1234567) + (fibonacciList[i - 1] % 1234567));
  return fibonacciList[n] % 1234567;
}

console.log(solution(1234567));
