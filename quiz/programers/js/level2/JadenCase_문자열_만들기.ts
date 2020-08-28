function solution(s: string) {
  const wordList: string[] = s.split('');
  for (let i: number = 0; i < wordList.length; i++) {
    if ((i === 0 || wordList[i - 1] === ' ') && /[a-zA-Z]/.test(wordList[i])) {
      wordList.splice(i, 1, wordList[i].toUpperCase());
    } else if (/[a-zA-Z]/.test(wordList[i])) {
      wordList.splice(i, 1, wordList[i].toLowerCase());
    }
  }
  return wordList.join('');
}

console.log(solution('s  f'));
