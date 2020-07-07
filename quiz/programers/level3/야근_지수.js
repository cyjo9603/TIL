function solution(n, works) {
  works.sort((a, b) => b - a);
  let index = 0;
  for (let i = 0; i < n; i++) {
    if (index + 1 !== works.length && works[index] < works[index + 1]) {
      works[++index]--;
    } else {
      index = 0;
      works[index]--;
    }
  }
  if (Math.max(...works) <= 0) {
    return 0;
  }

  return works.reduce((s, v) => s + v ** 2, 0);
}
