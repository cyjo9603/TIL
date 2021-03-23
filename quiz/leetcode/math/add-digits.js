/**
 * @param {number} num
 * @return {number}
 */
const addDigits = (num) =>
  num < 10 ? num : addDigits([...String(num)].reduce((acc, n) => acc + +n, 0));
