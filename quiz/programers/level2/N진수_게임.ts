function solution(n: number, t: number, m: number, p: number) {
  let numberList: string = '';
  let answer: string = '';
  for (let i: number = 0; ; i++) {
    numberList += i.toString(n);
    if (numberList.length >= m * t + p - 1) break;
  }
  for (let i: number = 0; i < t; i++) answer += numberList[i * m + p - 1];
  return answer.toUpperCase();
}
console.log(solution(16, 16, 2, 1));
