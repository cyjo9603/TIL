function solution(msg: string) {
  const dictionary: string[] = [];
  const output: number[] = [];
  for (let i = 65; i <= 90; i++) dictionary.push(String.fromCharCode(i));
  for (let i = 0; i < msg.length; i++) {
    for (let j = dictionary.length - 1; j >= 0; j--) {
      if (dictionary[j] === msg.substr(i, dictionary[j].length)) {
        output.push(j + 1);
        dictionary.push(msg.substr(i, dictionary[j].length + 1));
        i += dictionary[j].length - 1;
        break;
      }
    }
  }
  return output;
}

console.log(solution('TOBEORNOTTOBEORTOBEORNOT'));
