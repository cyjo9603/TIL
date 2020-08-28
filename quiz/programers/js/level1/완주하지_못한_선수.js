function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let key in completion) {
    if (participant[key] !== completion[key]) {
      return participant[key];
    }
  }
  return participant[participant.length - 1];
}

console.log(solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']));
