/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  nums.sort((a, b) => a - b);
  let i;
  for (i = 1; i < nums.length; i = i + 2) {
    if (nums[i - 1] != nums[i]) return nums[i - 1];
  }
  return nums[--i];
}
