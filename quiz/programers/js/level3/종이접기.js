"use strict";
function solution(n) {
    let output = [0];
    for (let i = 1; i < n; i++) {
        output = output.reduce((next, value, index) => {
            if (index % 2 === 0)
                next.push(0, value, 1);
            else
                next.push(value);
            return next;
        }, []);
    }
    return output;
}
console.log(solution(4));
