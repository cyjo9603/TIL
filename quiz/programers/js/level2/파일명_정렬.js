"use strict";
function solution(files) {
    const splitFileList = files.map((fileName) => {
        const splitString = [''];
        for (let i = 0; i < fileName.length; i++) {
            if ((/[\d]/.test(fileName[i]) && splitString.length === 1) ||
                (/[\D]/.test(fileName[i]) && splitString.length === 2) ||
                (splitString.length === 2 && splitString[1].length === 5)) {
                splitString.push('');
            }
            splitString[splitString.length - 1] += fileName[i];
        }
        return splitString;
    });
    for (let i = splitFileList.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (splitFileList[j][0].toLocaleLowerCase() > splitFileList[j + 1][0].toLocaleLowerCase()) {
                [splitFileList[j], splitFileList[j + 1]] = [splitFileList[j + 1], splitFileList[j]];
            }
            else if (splitFileList[j][0].toLocaleLowerCase() === splitFileList[j + 1][0].toLocaleLowerCase()) {
                if (parseInt(splitFileList[j][1]) > parseInt(splitFileList[j + 1][1])) {
                    [splitFileList[j], splitFileList[j + 1]] = [splitFileList[j + 1], splitFileList[j]];
                }
            }
        }
    }
    return splitFileList.map((splitName) => splitName.reduce((sumString, value) => sumString + value), '');
}
console.log(solution(['img12.png', 'img10.png', 'img02.png', 'img1.png', 'IMG01.GIF', 'img2']));
//console.log('abc' < 'abc');
