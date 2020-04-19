function solution(N, stages) {
  const failureRates = [];
  let clearUser = stages.length;
  for (let i = 1; i < N + 1; i++) {
    let count = clearUser - stages.length;
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] <= i) {
        count++;
      }
    }
    if (clearUser === 0 || count === 0) {
      failureRates.push({ stage: i, failureRate: 0 });
    } else {
      failureRates.push({ stage: i, failureRate: count / clearUser });
      clearUser -= count;
    }
  }
  const answer = failureRates
    .sort((a, b) => {
      if (a.failureRate === b.failureRate) {
        return a.stage - b.stage;
      }
      return b.failureRate - a.failureRate;
    })
    .map(ratesInfo => ratesInfo.stage);
  return answer;
}

console.log(solution(4, [4, 4, 4, 4, 4]));
