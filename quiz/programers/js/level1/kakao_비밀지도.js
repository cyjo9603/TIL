function solution(n, arr1, arr2) {
  const answer = [];
  arr1 = arr1.map(number => Array.from(setFiveChar(number.toString(2), n)));
  arr2 = arr2.map(number => Array.from(setFiveChar(number.toString(2), n)));

  for (let i = 0; i < n; i++) {
    answer.push([]);
    for (let j = 0; j < n; j++) {
      if (arr1[i][j] === '0' && arr2[i][j] === '0') {
        answer[i].push(' ');
      } else {
        answer[i].push('#');
      }
    }
    answer[i] = answer[i].join('');
  }
  return answer;
}

function setFiveChar(inputString, n) {
  while (inputString.length !== n) {
    inputString = '0' + inputString;
  }
  return inputString;
}

console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
