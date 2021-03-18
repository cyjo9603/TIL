/**
 * @param {string} columnTitle
 * @return {number}
 */
function titleToNumber(columnTitle) {
  return [...columnTitle].reduce((num, col) => num * 26 + (col.charCodeAt() - 64), 0);
}
