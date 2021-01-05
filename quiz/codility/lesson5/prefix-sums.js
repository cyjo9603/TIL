/**
 * @param {number} A
 * @param {number} B
 * @param {number} K
 */
function solution(A, B, K) {
  const first = A % K === 0 ? 1 : 0;
  return Math.floor(B / K) - (A > 0 ? Math.floor(A / K) : 0) + first;
}
