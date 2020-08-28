function solution(n) {
  const primeNumber = [];
  for (let i = 0; i < n + 1; i++) {
    primeNumber.push(i);
  }

  for (let i = 2; i * i < n; i++) {
    if (primeNumber[i]) {
      for (let j = i * i; j <= n; j += i) {
        primeNumber[j] = 0;
      }
    }
  }

  primeNumber.splice(0, 2);
  const answer = primeNumber.filter(value => value !== 0);
  return answer.length;
}

console.log(solution(10));
