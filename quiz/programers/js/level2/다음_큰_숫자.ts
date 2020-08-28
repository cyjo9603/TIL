function solution(n: number): number {
  const binaryNumberOfN = getBinaryNumberOfOne(n.toString(2));
  let answer: number = 0;
  for (let i: number = n + 1; ; i++) {
    if (getBinaryNumberOfOne(i.toString(2)) === binaryNumberOfN) {
      answer = i;
      break;
    }
  }
  return answer;
}

function getBinaryNumberOfOne(binaryNumber: string): number {
  return binaryNumber.split('').reduce((count: number, value: string) => {
    if (value === '1') count++;
    return count;
  }, 0);
}

console.log(solution(78));
