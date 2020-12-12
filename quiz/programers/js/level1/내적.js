function solution(a, b) {
  return a.reduce((acc, _, i) => acc + a[i] * b[i], 0);
}
