"use strict";
function solution(arr) {
    const list = [];
    for (let i = 2; i <= Math.max(...arr); i++) {
        while (true) {
            let check = false;
            for (let j = 0; j < arr.length; j++) {
                if ((arr[j] / i) % 1 === 0) {
                    check = true;
                    arr[j] /= i;
                }
            }
            if (check)
                list.push(i);
            else
                break;
        }
    }
    return arr.reduce((mulip, value) => mulip * value) * list.reduce((mulip, value) => mulip * value);
}
console.log(solution([1, 2]));
