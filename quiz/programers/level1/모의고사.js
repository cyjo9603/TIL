function solution(answers) {
  const abandonStudent = [[], [], []];
  const score = [0, 0, 0];
  const answer = [];
  for (let i = 0; i < answers.length; i++) {
    abandonStudent[0].push((i % 5) + 1);

    if (i % 2 === 0) {
      abandonStudent[1].push(2);
    } else if (i % 2 === 1 && i > 1) {
      if (abandonStudent[1][i - 2] === 1) {
        abandonStudent[1].push(3);
      } else if (abandonStudent[1][i - 2] == 5) {
        abandonStudent[1].push(1);
      } else if (abandonStudent[1][i - 2] !== 1) {
        abandonStudent[1].push(abandonStudent[1][i - 2] + 1);
      }
    } else if (i % 2 === 1 && i === 1) {
      abandonStudent[1].push(1);
    }

    if (Math.floor(i / 2) % 5 === 0) {
      abandonStudent[2].push(3);
    } else if (Math.floor(i / 2) % 5 < 3) {
      abandonStudent[2].push(Math.floor(i / 2) % 5);
    } else if (Math.floor((i / 2) % 5) < 5) {
      abandonStudent[2].push((Math.floor(i / 2) % 5) + 1);
    }
  }

  for (let i = 0; i < answers.length; i++) {
    for (let key in abandonStudent) {
      if (abandonStudent[key][i] === answers[i]) {
        score[key]++;
      }
    }
  }

  for (let i = 0, maximumScore = 0; i < 3; i++) {
    if (maximumScore < score[i]) {
      maximumScore = score[i];
      answer.splice(0, answer.length);
      answer.push(i + 1);
    } else if (maximumScore === score[i]) {
      answer.push(i + 1);
    }
  }
  return answer;
}

console.log(solution([1, 3, 2, 4, 2, 1, 3, 2, 4, 2, 1, 3, 2, 4, 2, 1, 3, 2, 4, 2, 3, 2]));
