function solution(progresses, speeds) {
  const answer = [];
  while (true) {
    let count = 0;
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += progresses[i] + speeds[i] <= 100 ? speeds[i] : 100 - progresses[i];
    }
    if (progresses[0] === 100) {
      while (progresses[0] === 100) {
        progresses.shift();
        speeds.shift();
        count++;
      }
      answer.push(count);
    }
    if (progresses.length === 0) {
      break;
    }
  }
  return answer;
}
console.log(solution([93, 30, 55], [1, 30, 5]));
