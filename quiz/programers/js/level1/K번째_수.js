function solution(array, commands) {
  const answer = commands.map(element => {
    const copyArray = [...array].slice(element[0] - 1, element[1]);
    copyArray.sort((number1, number2) => {
      return number1 - number2;
    });
    return copyArray[element[2] - 1];
  });
  return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));
