function solution(nums: number[]): number {
  const uniqueList = new Set<any>();
  for (let value of nums) uniqueList.add(value);
  return uniqueList.size > Math.floor(nums.length / 2)
    ? Math.floor(nums.length / 2)
    : uniqueList.size;
}

console.log(solution([3, 1, 2, 3]));
