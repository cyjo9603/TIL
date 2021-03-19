/**
 * @param {number} n
 * @return {boolean}
 */
function isHappy(n) {
  const seen = {};
  while (n !== 1 && !seen[n]) {
    seen[n] = true;
    console.log(n);
    n = happy(n);
  }
  return n === 1;
  function happy(num) {
    return [...String(num)].reduce((acc, target) => acc + Math.pow(+target, 2), 0);
  }
}

console.log(isHappy(19));
