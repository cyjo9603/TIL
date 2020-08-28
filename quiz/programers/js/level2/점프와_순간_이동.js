"use strict";
function solution(n) {
    let battery = 0;
    while (true) {
        if (n % 2 === 1) {
            n--;
            battery++;
        }
        else
            n /= 2;
        if (n === 0)
            return battery;
    }
}
console.log(solution(5000));
