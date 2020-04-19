"use strict";
function solution(str1, str2) {
    const inputString = [str1.toLowerCase(), str2.toLowerCase()];
    const arrayString = [];
    const checkSet = new Set();
    for (let i = 0; i < 2; i++) {
        arrayString.push([]);
        for (let j = 0; j < inputString[i].length - 1; j++) {
            const checkString = inputString[i].substr(j, 2);
            if (!/[^a-z]/.test(checkString)) {
                arrayString[i].push(checkString);
                checkSet.add(checkString);
            }
        }
    }
    let unionNumber = arrayString[0].length + arrayString[1].length;
    let intersection = 0;
    checkSet.forEach((value) => {
        const countList = [0, 0];
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < arrayString[i].length; j++) {
                if (arrayString[i][j] === value) {
                    countList[i]++;
                    arrayString[i].splice(j, 1);
                    j--;
                }
            }
        }
        intersection += Math.min(...countList);
    });
    unionNumber -= intersection;
    console.log(`intersection: ${intersection}, unionNumber: ${unionNumber}`);
    if (unionNumber === 0)
        return 65536;
    return Math.floor((intersection / unionNumber) * 65536);
}
console.log(solution('E=M*C^2', 'e=m*c^2'));
//console.log(/[^a-z]/.test('aaaa'));
