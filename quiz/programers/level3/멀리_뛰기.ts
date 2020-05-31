function solution(n: number) {
  let [temp, num] = [0, 1];

  for (let i = 0; i < n; i++) {
    [num, temp] = [(num + temp) % 1234567, num % 1234567];
    console.log(`num: ${num}, temp: ${temp}`);
  }
  return num % 1234567;
}

console.log(solution(4));
