const longestPalindrome = (s) => {
  const getLongString = (a, b) => (a.length > b.length ? a : b);

  const findPalindrome = (left, right) => {
    while (s[left] && s[left] === s[right]) {
      left--;
      right++;
    }

    return s.slice(left + 1, right);
  };

  return [...s].reduce((maxPalindrome, _, left) => {
    const currentPalindrome = getLongString(
      findPalindrome(left, left),
      findPalindrome(left, left + 1)
    );
    return getLongString(maxPalindrome, currentPalindrome);
  }, s[0]);
};

console.log(longestPalindrome('babad'));
