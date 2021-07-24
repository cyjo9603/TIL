function twoSum(nums: number[], target: number): [number, number] {
  for (let i = 0; i < nums.length; i++) {
    const targetIndex = nums.findIndex((v, _i) => _i !== i && v + nums[i] === target);

    if (targetIndex !== -1) {
      return [i, targetIndex];
    }
  }

  return [0, 0];
}
