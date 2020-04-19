"use strict";
function solution(brown, red) {
    const output = [];
    for (let i = red; i >= 1; i--) {
        if (brown === (i + 2) * 2 + (red / i) * 2) {
            output.push(i + 2);
            break;
        }
    }
    output.push((brown + red) / output[0]);
    return output;
}
console.log(solution(24, 24));
