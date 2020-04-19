function solution(n) {
  return Math.pow(Math.sqrt(n) + 1, 2) % 1 === 0 ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
}

console.log(solution(121));
