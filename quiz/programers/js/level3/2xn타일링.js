function solution(n) {
  if (n === 1) return 1;
  const num = [1, 2];
  for (let i = 3; i <= n; i++) {
    [num[0], num[1]] = [num[1], (num[0] + num[1]) % 1000000007];
  }
  return num[1];
}

console.log(solution(4));
