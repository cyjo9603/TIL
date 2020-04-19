function solution(n) {
  return Array.from(String(n))
    .map(element => parseInt(element))
    .reverse();
}
