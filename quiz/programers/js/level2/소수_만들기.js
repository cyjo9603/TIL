"use strict";
function solution(arr) {
    const picked = [];
    let count = 0;
    function find() {
        if (picked.length === 3) {
            const currentSum = picked.reduce((sum, index) => sum + arr[index], 0);
            if (isPrimeNumber(currentSum))
                count++;
            return;
        }
        const start = picked.length ? picked[picked.length - 1] + 1 : 0;
        for (let i = start; i < arr.length; i++) {
            picked.push(i);
            find();
            picked.pop();
        }
    }
    find();
    return count;
}
function isPrimeNumber(checkNumber) {
    for (let i = 2; i < checkNumber; i++)
        if (checkNumber % i === 0)
            return false;
    return true;
}
console.log(solution([1, 2, 7, 6, 4]));
