"use strict";
function solution(playerNumber, playerA, playerB) {
    for (let i = 0;; i++) {
        if (Math.ceil(playerA / 2) === Math.ceil(playerB / 2))
            return i + 1;
        [playerA, playerB, playerNumber] = [Math.ceil(playerA / 2), Math.ceil(playerB / 2), playerNumber / 2];
    }
    return 0;
}
