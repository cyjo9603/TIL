function solution(s) {
  const answer = Array.from(s)
    .sort()
    .reverse()
    .join('');
  return answer;
}

console.log(solution('ZBcdefg'));
