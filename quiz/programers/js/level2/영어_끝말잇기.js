"use strict";
function solution(n, words) {
    const currentWords = new Set();
    for (let i = 0; i < words.length; i++) {
        if (currentWords.size === 0 || words[i - 1].substr(-1, 1) === words[i].charAt(0))
            currentWords.add(words[i]);
        if (currentWords.size !== i + 1)
            return [(i % n) + 1, Math.floor(i / n) + 1];
    }
    return [0, 0];
}
console.log(solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']));
