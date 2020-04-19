function solution(citations: number[]): number {
  const max: number = getLargestNumber(citations);
  const answerList: number[] = [];
  let answer: number = 0;
  for (let i = 1; i < max; i++) {
    let h: number[] = [0, 0];
    for (let j of citations) {
      if (i <= j) h[0]++;
      else h[1]++;
    }
    if (i <= h[0] && i >= h[1]) answer = i;
  }
  return answer;
}

function getLargestNumber(inputList: number[]): number {
  return inputList.reduce((max: number, value: number): number => {
    if (max < value) {
      max = value;
    }
    return max;
  }, 0);
}

console.log(solution([20, 19, 18, 1]));
