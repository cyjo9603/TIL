/**
 * @param {number[]} A
 */
function solution(A) {
  const sortedA = [...A].sort((a, b) => a - b);
  return Math.max(
    sortedA[0] * sortedA[1] * sortedA[sortedA.length - 1],
    sortedA[sortedA.length - 1] * sortedA[sortedA.length - 2] * sortedA[sortedA.length - 3]
  );
}
