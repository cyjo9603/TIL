function solution(skill, skill_trees) {
  const skillStandard = Array.from(skill);
  const answer = skill_trees.filter(userSkill => {
    const skillTurn = skillStandard.map(standard => {
      return userSkill.search(standard);
    });
    for (let i = 0, check = false; i < skillTurn.length - 1; i++) {
      if (skillTurn[i] === -1) {
        check = true;
      }
      if (
        (check === true && skillTurn[i + 1] !== -1) ||
        (skillTurn[i] > skillTurn[i + 1] && skillTurn[i + 1] !== -1)
      ) {
        return false;
      }
    }
    return true;
  });
  return answer.length;
}

console.log(solution('CBDA', ['BACDE', 'CBADF', 'AECB', 'BDA']));
