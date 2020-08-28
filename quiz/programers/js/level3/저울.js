function solution(weight) {
  let answer = weight.sort((a, b) => a - b)[0];
  while (answer + 1 >= weight[0]) answer += weight.shift();
  return answer;
}

console.log(solution([3, 1, 6, 2, 7, 30, 1]));
