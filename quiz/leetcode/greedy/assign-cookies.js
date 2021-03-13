/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
function findContentChildren(g, s) {
  const sortedG = [...g].sort((a, b) => a - b);
  const sortedS = [...s].sort((a, b) => a - b);

  let count = 0;

  for (const num of sortedS) {
    if (num < sortedG[count] || !sortedG[count]) continue;
    count++;
  }

  return count;
}
