"use strict";
function solution(relation) {
    const indexList = getIndex(relation[0].length);
    const candidateKey = [];
    indexList.forEach((list) => {
        const listSet = new Set();
        for (let i = 0; i < relation.length; i++) {
            listSet.add(list.reduce((sumValue, check, index) => {
                if (check)
                    sumValue += relation[i][index];
                return sumValue;
            }, ''));
        }
        if (listSet.size === relation.length) {
            candidateKey.push(list.reduce((unit, check, index) => {
                if (check)
                    unit.push(index);
                return unit;
            }, []));
        }
    });
    while (true) {
        let check = true;
        for (let i = 0; i < candidateKey.length; i++) {
            for (let j = 0; j < candidateKey.length; j++) {
                if (candidateKey[i].length < candidateKey[j].length) {
                    const length = candidateKey[j].length;
                    const checkSet = new Set();
                    candidateKey[i].forEach((value) => checkSet.add(value));
                    candidateKey[j].forEach((value) => checkSet.add(value));
                    if (checkSet.size === length) {
                        candidateKey.splice(j, 1);
                        check = false;
                    }
                }
            }
        }
        if (check)
            return candidateKey.length;
    }
}
function getIndex(length) {
    const outputIndex = [];
    const picked = [];
    function find() {
        if (picked.length === length) {
            return outputIndex.push(picked.map((value) => (value === 1 ? true : false)));
        }
        for (let i = 0; i < 2; i++) {
            picked.push(i);
            find();
            picked.pop();
        }
    }
    find();
    return outputIndex;
}
console.log(solution([
    ['100', 'ryan', 'music', '2'],
    ['200', 'apeach', 'math', '2'],
    ['300', 'tube', 'computer', '3'],
    ['400', 'con', 'computer', '4'],
    ['500', 'muzi', 'music', '3'],
    ['600', 'apeach', 'music', '2'],
]));
