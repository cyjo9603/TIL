"use strict";
function solution(s) {
    const list = s.split(' ').map((value) => parseInt(value));
    return `${Math.min(...list)} ${Math.max(...list)}`;
}
console.log(solution('1 2 3 4'));
