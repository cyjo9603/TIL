function solution(lines: string[]) {
  const times: number[][] = lines
    .map((line: string): number[] => {
      const splitLine = line.split(' ');
      const completeTime: number =
        Number(splitLine[1].substr(-6, 6)) * 1000 + Number(splitLine[1].substr(3, 2)) * 60000 + Number(splitLine[1].substr(0, 2)) * 3600000;
      const startTime: number = completeTime - Number(splitLine[2].substr(0, splitLine[2].length - 1)) * 1000 + 1;
      return [startTime, completeTime];
    })
    .sort((a: number[], b: number[]): number => a[0] - b[0]);
  const maxCount: number = times.reduce((count: number, time: number[]): number => {
    let currentCount: number = 0;
    for (let i: number = 0; i < times.length; i++) {
      if (
        (time[0] - 1000 > times[i][0] && time[0] - 1000 < times[i][1]) ||
        (time[0] - 1000 < times[i][0] && time[0] >= times[i][1]) ||
        (time[0] >= times[i][0] && time[0] <= times[i][1])
      ) {
        currentCount++;
      }
    }
    return count < currentCount ? currentCount : count;
  }, 0);
  return maxCount;
  //console.log(times);
}

// console.log(
//   solution([
//     '2016-09-15 20:59:57.421 0.351s',
//     '2016-09-15 20:59:58.233 1.181s',
//     '2016-09-15 20:59:58.299 0.8s',
//     '2016-09-15 20:59:58.688 1.041s',
//     '2016-09-15 20:59:59.591 1.412s',
//     '2016-09-15 21:00:00.464 1.466s',
//     '2016-09-15 21:00:00.741 1.581s',
//     '2016-09-15 21:00:00.748 2.31s',
//     '2016-09-15 21:00:00.966 0.381s',
//     '2016-09-15 21:00:02.066 2.62s',
//   ])
// );

console.log(solution(['2016-09-15 01:00:04.001 2.0s', '2016-09-15 01:00:07.000 2s']));

//console.log(new Date('2016-09-15 23:59:59.999') < new Date('2016-09-15 23:59:59.998'));
