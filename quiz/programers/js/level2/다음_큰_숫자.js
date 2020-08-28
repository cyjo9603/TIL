"use strict";
function solution(n) {
    const binaryNumberOfN = getBinaryNumberOfOne(n.toString(2));
    let answer = 0;
    for (let i = n + 1;; i++) {
        if (getBinaryNumberOfOne(i.toString(2)) === binaryNumberOfN) {
            answer = i;
            break;
        }
    }
    return answer;
}
function getBinaryNumberOfOne(binaryNumber) {
    return binaryNumber.split('').reduce((count, value) => {
        if (value === '1')
            count++;
        return count;
    }, 0);
}
console.log(solution(78));
