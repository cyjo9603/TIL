"use strict";
function solution(numbers, target) {
    let count = 0;
    for (let i = 0; i < Math.pow(2, numbers.length); i++) {
        const targetNumber = changeBoolean(setDigits(i.toString(2), numbers.length)).reduce((cal, value, index) => {
            cal += value ? numbers[index] : -numbers[index];
            return cal;
        }, 0);
        if (targetNumber === target) {
            count++;
        }
    }
    return count;
}
function changeBoolean(inputString) {
    return inputString.split('').map((value) => (value === '1' ? true : false));
}
function setDigits(inputString, length) {
    while (inputString.length !== length) {
        inputString = '0' + inputString;
    }
    return inputString;
}
console.log(solution([1, 1, 1, 1, 1], 3));
