/**
 * @param {number[]} A
 */
function solution(A) {
  let count = 0;
  let east = 0;

  for (let i = 0; i < A.length; i++) {
    if (!A[i]) {
      east++;
      continue;
    }

    count += east;

    if (count > 1000000000) return -1;
  }

  return count;
}
