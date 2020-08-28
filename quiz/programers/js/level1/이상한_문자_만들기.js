function solution(s) {
  let answer = '';
  for (let i = 0, count = 0; i < s.length; i++) {
    if (s.substr(i, 1) === ' ') {
      answer += ' ';
      count = 0;
    } else {
      if (count % 2 === 0) {
        answer += s.substr(i, 1).toUpperCase();
      } else {
        answer += s.substr(i, 1).toLowerCase();
      }
      count++;
    }
  }
  return answer;
}

console.log(solution('THIS IS NEVER THAT'));
