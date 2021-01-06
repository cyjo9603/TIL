/**
 * @param {number[]} A
 */
function solution(A) {
  const length = A.length;
  const sortedA = [...A].sort((a, b) => a - b);
  const notNegativeIndex = sortedA.findIndex((num) => num >= 0);

  for (let i = notNegativeIndex; i < length; i++) {
    const [P, Q, R] = [sortedA[i], sortedA[i + 1], sortedA[i + 2]];
    if (P + Q > R) {
      return 1;
    }
  }
  return 0;
}
