function solution(m: string, musicinfos: string[]) {
  const musicInfoList: string[][] = musicinfos.map((list: string) => list.split(','));
  const musicList: string[] = [];
  const answerList: number[] = [];
  m = changeHash(m);

  musicInfoList.forEach((list: string[]) => {
    list[3] = changeHash(list[3]);
    let playTime: number = (new Date(`2020-02-01 ${list[1]}`).getTime() - new Date(`2020-02-01 ${list[0]}`).getTime()) / 60000;
    let melody: string = '';
    for (let i: number = 0; i < playTime; i++) melody += list[3].charAt(i % list[3].length);
    musicList.push(melody);
  });

  musicList.forEach((music: string, index: number) => {
    if (music.indexOf(m) !== -1) answerList.push(index);
  });

  if (answerList.length === 0) return '(None)';
  else if (answerList.length === 1) return musicInfoList[answerList[0]][2];
  else {
    return answerList.reduce(
      (output: [string, string], index: number) => {
        if (output[0].length < musicList[index].length) {
          output = [musicList[index], musicInfoList[index][2]];
        }
        return output;
      },
      ['', '']
    )[1];
  }
}

function changeHash(inputString: string) {
  const stringArr: string[] = inputString.split('');
  for (let i: number = 0; i < stringArr.length; i++) {
    if (stringArr[i] === '#') {
      stringArr[i - 1] = stringArr[i - 1].toLowerCase();
      stringArr.splice(i, 1);
      i--;
    }
  }
  return stringArr.join('');
}

console.log(solution('ABCDEFG', ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF']));
console.log(solution('CC#BCC#BCC#BCC#B', ['03:00,03:30,FOO,CC#B', '04:00,04:08,BAR,CC#BCC#BCC#B']));
console.log(solution('ABC', ['12:00,12:14,HELLO,C#DEFGAB', '13:00,13:05,WORLD,ABCDEF']));
