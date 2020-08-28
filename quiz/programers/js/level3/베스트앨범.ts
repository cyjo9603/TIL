function solution(genres: string[], plays: number[]) {
  const answer: any = [];
  const genreInfo: any[] = [];
  genres.forEach((value, index) => {
    let genreIndex = findGenre(genreInfo, value);
    if (genreIndex === -1) {
      genreInfo.push([value, 0, []]);
      genreIndex = genreInfo.length - 1;
    }
    genreInfo[genreIndex][1] += plays[index];
    genreInfo[genreIndex][2].push([plays[index], index]);
  });
  genreInfo.sort((list1, list2) => list2[1] - list1[1]);
  genreInfo.forEach(list => {
    list[2].sort((playInfo01: number[], playInfo02: number[]) => playInfo02[0] - playInfo01[0]);
  });
  genreInfo.forEach(list => {
    answer.push(list[2][0][1]);
    if (list[2].length !== 1) answer.push(list[2][1][1]);
  });
  return answer;
}

function findGenre(genreInfo: any[], genreName: string): number {
  for (let i = 0; i < genreInfo.length; i++) if (genreInfo[i][0] === genreName) return i;
  return -1;
}

console.log(solution(['classic', 'pop', 'classic', 'classic', 'pop'], [500, 600, 150, 800, 2500]));
