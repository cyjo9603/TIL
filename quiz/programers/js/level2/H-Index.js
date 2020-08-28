"use strict";
function solution(citations) {
    const max = getLargestNumber(citations);
    const answerList = [];
    let answer = 0;
    for (let i = 1; i < max; i++) {
        let h = [0, 0];
        for (let j of citations) {
            if (i <= j)
                h[0]++;
            else
                h[1]++;
        }
        if (i <= h[0] && i >= h[1])
            answer = i;
    }
    return answer;
}
function getLargestNumber(inputList) {
    return inputList.reduce((max, value) => {
        if (max < value) {
            max = value;
        }
        return max;
    }, 0);
}
console.log(solution([20, 19, 18, 1]));
