function solution(x) {
  return x % getSumDigits(x) === 0 ? true : false;
}

function getSumDigits(n) {
  const inputNumberChangeString = Array.from(String(n));
  const answer = inputNumberChangeString.reduce((answer, value) => {
    return answer + parseInt(value);
  }, 0);
  return answer;
}

console.log(solution(13));
