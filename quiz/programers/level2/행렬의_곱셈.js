"use strict";
function solution(arr1, arr2) {
    const answer = [];
    for (let i = 0; i < arr1.length; i++) {
        answer.push([]);
        for (let j = 0; j < arr2[0].length; j++) {
            answer[i].push(0);
            for (let k = 0; k < arr2.length; k++) {
                answer[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    return answer;
}
console.log(solution([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]]));
