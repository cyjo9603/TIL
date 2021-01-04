/**
 * @param {number} N
 * @param {number[]} A
 */
function solution(N, A) {
  const counter = new Array(N).fill(0);
  const line = N + 1;
  let [tempMax, max] = [0, 0];

  A.forEach((num) => {
    if (num === line) {
      max = tempMax;
      return;
    }

    const currentIndex = num - 1;

    if (counter[currentIndex] < max) counter[currentIndex] = max;
    counter[currentIndex]++;
    if (tempMax < counter[currentIndex]) tempMax = counter[currentIndex];
  });

  return counter.map((num) => (num < max ? max : num));
}
