function solution(record: string[]): string[] {
  const userInfo: any = {};
  const log: string[][] = [];
  for (let i: number = 0; i < record.length; i++) {
    const splitCommand: string[] = record[i].split(' ');

    if (splitCommand[0] === 'Enter') {
      userInfo[splitCommand[1]] = splitCommand[2];
      log.push([splitCommand[1], '님이 들어왔습니다.']);
    } else if (splitCommand[0] === 'Leave') {
      log.push([splitCommand[1], '님이 나갔습니다.']);
    } else if (splitCommand[0] === 'Change') {
      userInfo[splitCommand[1]] = splitCommand[2];
    }
  }
  return log.map((line: string[]): string => userInfo[line[0]] + line[1]);
}

console.log(solution(['Enter uid1234 Muzi', 'Enter uid4567 Prodo', 'Leave uid1234', 'Enter uid1234 Prodo', 'Change uid4567 Ryan']));
