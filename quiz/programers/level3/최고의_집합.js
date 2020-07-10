function solution(n, s) {
  if (s < n) return [-1];
  const value = parseInt(s / n, 10);
  const rest = s % n;
  const result = new Array(n).fill(value);

  for (let i = result.length - 1; i >= result.length - rest; i--) {
    result[i]++;
  }

  return result;
}
