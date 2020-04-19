function solution(numberOfPeople: number, times: number[]) {
  let min: number = 1;
  let max: number = Math.max(...times) * numberOfPeople;

  while (min + 1 < max) {
    const mid: number = Math.floor((min + max) / 2);
    const people: number = times.reduce((people: number, time: number) => people + Math.floor(mid / time), 0);
    people < numberOfPeople ? (min = mid) : (max = mid);
  }
  return max;
}

console.log(solution(6, [7, 10]));
