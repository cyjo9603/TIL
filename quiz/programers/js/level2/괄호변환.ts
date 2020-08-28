function solution(inputString: string): string {
  let answer: string = '';
  if (inputString.length === 0) {
    return '';
  }
  const [u, v, trueCheck]: [string, string, boolean] = splitString(inputString);
  if (trueCheck) {
    answer += u + solution(v);
  } else {
    let str1: string = '(' + solution(v) + ')';
    let str2: string = '';
    for (let i = 1; i < u.length - 1; i++) {
      str2 += u.substr(i, 1) === '(' ? ')' : '(';
    }
    return str1 + str2;
  }
  return answer;
}

function splitString(inputString: string): [string, string, boolean] {
  let countOpen: number = 0;
  let countClose: number = 0;
  let trueCheck = true;
  for (let i: number = 0; i < inputString.length; i++) {
    const nowStr: string = inputString.substr(i, 1);
    nowStr === '(' ? countOpen++ : countClose++;
    if (countOpen < countClose) {
      trueCheck = false;
    }
    if (countOpen === countClose) {
      break;
    }
  }
  return [
    inputString.slice(0, countOpen + countClose),
    inputString.substr(countOpen + countClose),
    trueCheck,
  ];
}

console.log(solution('()))((()'));
//console.log(splitString('()))((()'));
