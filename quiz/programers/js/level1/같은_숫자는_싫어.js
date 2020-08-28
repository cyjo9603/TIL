function solution(arr) {
  const answer = [];
  arr.forEach(element => {
    if (answer[answer.length - 1] !== element) {
      answer.push(element);
    }
  });
  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
