function solution(priorities, location) {
  let answer = 0;
  while (true) {
    const currentTask = priorities.shift();
    if (!checkImportance(currentTask, priorities)) {
      if (location === 0) {
        location = priorities.length + 1;
      }
      priorities.push(currentTask);
    } else {
      answer++;
      if (location === 0) {
        return answer;
      }
    }
    location--;
  }
}

function checkImportance(currentTask, taskList) {
  for (let i = 0; i < taskList.length; i++) {
    if (currentTask < taskList[i]) {
      return false;
    }
  }
  return true;
}

console.log(solution([1, 1, 9, 1, 1, 1], 0));
