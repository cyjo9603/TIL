"use strict";
function solution(board) {
    const initCheck = allSumCheck(board);
    const width = board[0].length;
    const height = board.length;
    let length = 0;
    if (initCheck === 0)
        return 0;
    else if (initCheck === width * height)
        return Math.pow(width > height ? height : width, 2);
    for (let col = 1; col < height; col++) {
        for (let row = 1; row < width; row++) {
            if (board[col][row] > 0) {
                const min = Math.min(board[col - 1][row - 1], board[col][row - 1], board[col - 1][row]);
                board[col][row] = min + 1;
            }
            if (length < board[col][row]) {
                length = board[col][row];
            }
        }
    }
    return Math.pow(length, 2);
}
function allSumCheck(board) {
    return board.reduce((boardSum, row) => boardSum + row.reduce((sum, value) => sum + value, 0), 0);
}
//console.log(solution([[0, 0, 1, 1], [1, 1, 1, 1]]));
//console.log(getZeroIndex([[0, 0, 0, 0], [0, 0, 0, 0]]));
