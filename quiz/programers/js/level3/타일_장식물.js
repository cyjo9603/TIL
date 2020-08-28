function solution(N) {
  let [result, before] = [6, 4];
  if (N === 1) return before;
  for (let i = 2; i < N; i++) [result, before] = [result + before, result];
  return result;
}

console.log(solution(5));
