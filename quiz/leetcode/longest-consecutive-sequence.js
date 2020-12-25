const longestConsecutive = (nums) => {
  let beforeNum = null;
  let count = 0;
  const sortedNums = [...new Set(nums)].sort((a, b) => a - b);

  return sortedNums.reduce((maxCount, num) => {
    count = beforeNum + 1 === num ? count + 1 : 1;

    beforeNum = num;

    if (count > maxCount) {
      maxCount = count;
    }

    return maxCount;
  }, 0);
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]) === 4);
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]) === 9);
