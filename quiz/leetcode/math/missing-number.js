/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
  const trueSum = new Array(nums.length).fill().reduce((acc, _, i) => acc + 1 + i, 0);
  const sum = nums.reduce((acc, v) => acc + v, 0);

  return trueSum - sum;
}
