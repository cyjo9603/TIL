"use strict";
function solution(listA, listB) {
    const length = listA.length;
    let sum = 0;
    listA.sort((a, b) => a - b);
    listB.sort((a, b) => b - a);
    for (let i = 0; i < length; i++)
        sum += listA[i] * listB[i];
    return sum;
}
console.log(solution([1, 4, 2], [5, 4, 4]));
