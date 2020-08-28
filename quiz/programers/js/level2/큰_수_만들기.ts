function solution(number: string, k: number): string {
  const n: number = number.length;
  let answer: string = '',
    startIdx: number = 0,
    maxChar: string,
    maxIdx: number = 0;

  for (let i: number = n - k; i > 0; i--) {
    maxChar = '0';

    for (let j: number = startIdx; j <= n - i; j++) {
      if (number[j] > maxChar) {
        maxIdx = j;
        maxChar = number[j];
        if (maxChar === '9') {
          break;
        }
      }
    }

    answer += maxChar;
    startIdx = maxIdx + 1;
  }

  return answer;
}
console.log(solution('1010', 2));
