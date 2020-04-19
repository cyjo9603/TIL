"use strict";
function solution(people, limit) {
    let count = people.length;
    people.sort((a, b) => a - b);
    for (let i = people.length - 1, searchIndex = 0; i > searchIndex; i--) {
        if (people[i] + people[searchIndex] <= limit) {
            searchIndex += 1;
            count--;
        }
    }
    return count;
}
console.log(solution([70, 50, 80, 50], 100));
