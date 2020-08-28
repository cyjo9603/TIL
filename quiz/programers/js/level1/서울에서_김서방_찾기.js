function solution(seoul) {
  let answer = 0;
  seoul.forEach((element, index) => {
    if (element === 'Kim') {
      answer = index;
    }
  });
  return `김서방은 ${answer}에 있다`;
}
