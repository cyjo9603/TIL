/**
 * @param {number[]} A
 */
function solution(A) {
  let left = 0;
  let right = A.reduce((acc, num) => acc + num, 0);
  let min;
  for (let i = 0; i < A.length - 1; i++) {
    left += A[i];
    right -= A[i];
    const currentDiff = Math.abs(left - right);

    if (min === undefined || min > currentDiff) {
      min = currentDiff;
    }
  }

  return min;
}
