function solution(n) {
  const answer = [];

  while (true) {
    const threeCheck = n % 3 === 0 ? 1 : 0;
    const quotient = Math.floor(n / 3) - threeCheck;
    const remainder = n % 3;

    answer.unshift(remainder);
    n = quotient;
    if (quotient < 4) {
      answer.unshift(quotient);
      break;
    }
  }

  return parseInt(
    answer
      .map((element, index) => {
        if ((element === 0 && index !== 0) || element === 3) {
          return 4;
        } else if (element === 1 || element === 2) {
          return element;
        }
      })
      .join('')
  ).toString();
}

console.log(solution(28));
