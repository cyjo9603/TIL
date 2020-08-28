"use strict";
function solution(number, k) {
    const n = number.length;
    let answer = '', startIdx = 0, maxChar, maxIdx = 0;
    for (let i = n - k; i > 0; i--) {
        maxChar = '0';
        for (let j = startIdx; j <= n - i; j++) {
            if (number[j] > maxChar) {
                maxIdx = j;
                maxChar = number[j];
                if (maxChar === '9') {
                    break;
                }
            }
        }
        answer += maxChar;
        startIdx = maxIdx + 1;
    }
    return answer;
}
console.log(solution('1010', 2));
