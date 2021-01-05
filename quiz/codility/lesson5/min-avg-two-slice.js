/**
 * @param {number} A
 */
function solution(A) {
  let minIndex = 0;
  let minAvg = 10001;

  for (let i = 0; i < A.length; i++) {
    if (i + 1 < A.length) {
      const currentAvg = (A[i] + A[i + 1]) / 2;
      if (minAvg > currentAvg) {
        minAvg = currentAvg;
        minIndex = i;
      }
    }
    if (i + 2 < A.length) {
      const currentAvg = (A[i] + A[i + 1] + A[i + 2]) / 3;
      if (minAvg > currentAvg) {
        minAvg = currentAvg;
        minIndex = i;
      }
    }
  }
  return minIndex;
}

console.log(solution([4, 2, 2, 5, 1, 5, 8]));
