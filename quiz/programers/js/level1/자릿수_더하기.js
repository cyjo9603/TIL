function solution(n) {
  const inputNumberChangeString = Array.from(String(n));
  const answer = inputNumberChangeString.reduce((answer, value) => {
    return answer + parseInt(value);
  }, 0);
  return answer;
}

console.log(solution(123));
