function solution(s, n) {
  let answer = '';
  const stringArray = Array.from(s).map(word => {
    let asciiWord = word.charCodeAt();
    if (asciiWord >= 65 && asciiWord <= 90) {
      asciiWord + n > 90 ? (asciiWord += n - 26) : (asciiWord += n);
    } else if (asciiWord >= 97 && asciiWord <= 122) {
      asciiWord + n > 122 ? (asciiWord += n - 26) : (asciiWord += n);
    }
    return String.fromCharCode(asciiWord);
  });
  return stringArray.join('');
}

console.log(solution('AB', 1));
