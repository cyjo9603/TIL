"use strict";
function solution(inputNumber) {
    const inputNumberArray = inputNumber.split('');
    const maximumNumber = getMaximumNumber(inputNumberArray);
    const primeNumberList = getPrimeNumberList(maximumNumber);
    const answer = deleteInvalidNumber(primeNumberList, inputNumberArray);
    return answer.length;
}
function deleteInvalidNumber(primeNumberList, inputNumberArray) {
    return primeNumberList.filter((element) => {
        const list = String(element).split('');
        const keyList = [...inputNumberArray];
        let count = 0;
        for (let value of list) {
            for (let j = 0; j < keyList.length; j++) {
                if (value === keyList[j]) {
                    keyList[j] = 'pass';
                    count++;
                    break;
                }
            }
        }
        return list.length === count;
    });
}
function getPrimeNumberList(inputNumber) {
    const primeNumber = [];
    for (let i = 0; i < inputNumber + 1; i++) {
        primeNumber.push(i);
    }
    for (let i = 2; i * i < inputNumber; i++) {
        for (let j = i * i; j <= inputNumber; j += i) {
            primeNumber[j] = 0;
        }
    }
    return primeNumber.filter((value) => value !== 0 && value !== 1);
}
function getMaximumNumber(inputNumberArray) {
    return parseInt(inputNumberArray.sort((a, b) => parseInt(b) - parseInt(a)).join(''));
}
console.log(solution('17'));
//console.log(String(112).split(''));
