"use strict";
function solution(nums) {
    const uniqueList = new Set();
    for (let value of nums)
        uniqueList.add(value);
    return uniqueList.size > Math.floor(nums.length / 2)
        ? Math.floor(nums.length / 2)
        : uniqueList.size;
}
console.log(solution([3, 1, 2, 3]));
