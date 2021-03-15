/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  const reversed = +`${x < 0 ? '-' : ''}${[...Math.abs(x).toString()].reverse().join('')}`;
  return reversed <= 0x7fffffff && reversed >= -0x80000000 ? reversed : 0;
}
