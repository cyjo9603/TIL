/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isSubsequence([...sequence], text) {
  if (!sequence.length) return true;
  for (let key of text) {
    if (key !== sequence[0]) continue;
    sequence.shift();
    if (!sequence.length) return true;
  }
  return false;
}
