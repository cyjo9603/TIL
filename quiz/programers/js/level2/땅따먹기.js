"use strict";
function solution(land) {
    for (let i = 1; i < land.length; i++) {
        for (let j = 0; j < 4; j++) {
            let maxItem = 0;
            for (let k = 0; k < 4; k++) {
                if (k !== j)
                    maxItem = Math.max(maxItem, land[i][j] + land[i - 1][k]);
            }
            land[i][j] = maxItem;
        }
    }
    return Math.max(...land[land.length - 1]);
}
console.log(solution([[4, 3, 2, 1], [2, 2, 2, 1], [6, 6, 6, 4], [8, 7, 6, 5]]));
console.log(solution([[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]]));
