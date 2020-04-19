"use strict";
function solution(numberOfPeople, times) {
    let min = 1;
    let max = Math.max(...times) * numberOfPeople;
    while (min + 1 < max) {
        const mid = Math.floor((min + max) / 2);
        const people = times.reduce((people, time) => people + Math.floor(mid / time), 0);
        people < numberOfPeople ? (min = mid) : (max = mid);
    }
    return max;
}
console.log(solution(6, [7, 10]));
