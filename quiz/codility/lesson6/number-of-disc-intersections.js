/**
 * @param {number[]} A
 */
function solution(A) {
  const length = A.length;
  const { lower, upper } = A.reduce(
    (point, number, i) => {
      point.lower.push(i - number);
      point.upper.push(i + number);
      return point;
    },
    { lower: [], upper: [] }
  );

  lower.sort((a, b) => a - b);
  upper.sort((a, b) => a - b);

  let intersection = 0;
  let j = 0;
  for (let i = 0; i < length; i++) {
    while (j < length && upper[i] >= lower[j]) {
      intersection = intersection + j++ - i;
    }
  }

  if (intersection > 10000000) return -1;
  return intersection;
}

console.log(solution([1, 5, 2, 1, 4, 0]));
