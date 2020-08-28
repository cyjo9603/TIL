"use strict";
function solution(inputString) {
    let answer = '';
    if (inputString.length === 0) {
        return '';
    }
    const [u, v, trueCheck] = splitString(inputString);
    if (trueCheck) {
        answer += u + solution(v);
    }
    else {
        let str1 = '(' + solution(v) + ')';
        let str2 = '';
        for (let i = 1; i < u.length - 1; i++) {
            str2 += u.substr(i, 1) === '(' ? ')' : '(';
        }
        return str1 + str2;
    }
    return answer;
}
function splitString(inputString) {
    let countOpen = 0;
    let countClose = 0;
    let trueCheck = true;
    for (let i = 0; i < inputString.length; i++) {
        const nowStr = inputString.substr(i, 1);
        nowStr === '(' ? countOpen++ : countClose++;
        if (countOpen < countClose) {
            trueCheck = false;
        }
        if (countOpen === countClose) {
            break;
        }
    }
    return [
        inputString.slice(0, countOpen + countClose),
        inputString.substr(countOpen + countClose),
        trueCheck,
    ];
}
console.log(solution('()))((()'));
//console.log(splitString('()))((()'));
