"use strict";
function solution(inputList) {
    if (inputList.reduce((sum, value) => sum + value, 0) === 0) {
        return '0';
    }
    let answer = '';
    const list = inputList
        .map((value) => String(value))
        .sort()
        .reverse()
        .reduce((arr, value) => {
        if (arr[arr.length - 1].length === 0 || arr[arr.length - 1][0][0] === value[0]) {
            arr[arr.length - 1].push(value);
        }
        else {
            arr.push([value]);
        }
        return arr;
    }, [[]]);
    for (let i of list) {
        if (i.length > 1) {
            i.sort((a, b) => parseInt(b + a) - parseInt(a + b));
        }
    }
    return list.join('').replace(/,/gi, '');
}
console.log(solution([0, 0, 0, 0]));
