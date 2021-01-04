/**
 * @param {number} X
 * @param {number[]} A
 */
function solution(X, A) {
  const restLeefs = new Set(new Array(X).fill().map((_, i) => i + 1));

  return A.findIndex((leef, i) => {
    if (restLeefs.has(leef)) {
      restLeefs.delete(leef);
      return restLeefs.size === 0;
    }
    return false;
  });
}
