/**
 * @param {string} S
 * @param {number[]} P
 * @param {number[]} Q
 */
function solution(S, P, Q) {
  return P.map((p, i) => {
    const slice = S.slice(p, Q[i] + 1);
    if (slice.indexOf('A') !== -1) {
      return 1;
    }
    if (slice.indexOf('C') !== -1) {
      return 2;
    }
    if (slice.indexOf('G') !== -1) {
      return 3;
    }

    return 4;
  });
}
