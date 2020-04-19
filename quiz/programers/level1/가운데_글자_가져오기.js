function solution(s) {
  let answer;
  if (s.length % 2 === 1) {
    answer = s.slice(Math.floor(s.length / 2), Math.floor(s.length / 2) + 1);
  } else if (s.length % 2 === 0) {
    answer = s.slice(s.length / 2 - 1, s.length / 2 + 1);
  }
  return answer;
}

console.log(solution('qwer'));
