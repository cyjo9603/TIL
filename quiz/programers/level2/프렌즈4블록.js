"use strict";
function solution(m, n, board) {
    const arrayBoard = board.map((value) => value.split(''));
    while (true) {
        const delList = getDelList(arrayBoard, m, n);
        if (delList.length === 0)
            break;
        paintDel(arrayBoard, delList);
        moveBlock(arrayBoard, m, n);
    }
    return m * n - checkCount(arrayBoard);
}
function checkCount(arrayBoard) {
    return arrayBoard.reduce((sum, list) => {
        return (sum +
            list.reduce((listSum, value) => {
                if (value !== 'DEL')
                    return listSum + 1;
                return listSum;
            }, 0));
    }, 0);
}
function moveBlock(arrayBoard, m, n) {
    for (let j = 0; j < n; j++) {
        for (let i = 1; i < m; i++) {
            if (arrayBoard[i][j] === 'DEL') {
                for (let k = i; k > 0; k--) {
                    arrayBoard[k][j] = arrayBoard[k - 1][j];
                    if (k === 1) {
                        arrayBoard[k - 1][j] = 'DEL';
                    }
                }
            }
        }
    }
}
function getDelList(arrayBoard, m, n) {
    const list = [];
    for (let i = 0; i < m - 1; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (arrayBoard[i][j] !== 'DEL' &&
                arrayBoard[i][j] === arrayBoard[i][j + 1] &&
                arrayBoard[i][j] === arrayBoard[i + 1][j] &&
                arrayBoard[i + 1][j] === arrayBoard[i + 1][j + 1])
                list.push([i, j]);
        }
    }
    return list;
}
function paintDel(arrayBoard, delList) {
    delList.forEach((indexList) => {
        arrayBoard[indexList[0]][indexList[1]] = 'DEL';
        arrayBoard[indexList[0]][indexList[1] + 1] = 'DEL';
        arrayBoard[indexList[0] + 1][indexList[1]] = 'DEL';
        arrayBoard[indexList[0] + 1][indexList[1] + 1] = 'DEL';
    });
}
console.log(solution(6, 6, ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ']));
