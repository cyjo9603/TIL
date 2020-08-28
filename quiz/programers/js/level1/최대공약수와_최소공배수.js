function solution(n, m) {
  const answer = [];
  answer.push(getGCD(n, m));
  answer.push(getGCM(n, m));
  return answer;
}

function getGCD(number1, number2) {
  number1 = Math.abs(number1);
  number2 = Math.abs(number2);
  [number1, number2] = swap(number1, number2);
  return uclid(number1, number2);
}

function swap(number1, number2) {
  if (number1 < number2) {
    [number1, number2] = [number2, number1];
  }
  return [number1, number2];
}

function uclid(number1, number2) {
  do {
    [number1, number2] = [number2, number1 % number2];
  } while (number2 !== 0);
  return number1;
}

function getGCM(number1, number2) {
  const gcd = getGCD(number1, number2);
  return (number1 * number2) / gcd;
}

console.log(solution(2, 5));
