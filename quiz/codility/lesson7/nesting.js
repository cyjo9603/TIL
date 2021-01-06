function solution(S) {
  let left = 0;

  for (let s of S) {
    s === '(' ? left++ : left--;
    if (left < 0) return 0;
  }
  return left === 0 ? 1 : 0;
}

console.log(solution('(())()(()())') === 1);
console.log(solution('(())()()())') === 0);
console.log(solution('()(()())()') === 1);
