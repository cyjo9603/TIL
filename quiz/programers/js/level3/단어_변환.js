function solution(begin, target, words) {
  const list = [];

  const dfs = (remainWord, currnetCourse, currentWord) => {
    remainWord.forEach((v, i) => {
      const num = currentWord.split('').filter((c, i) => c === v[i]);
      if (num.length === begin.length - 1) {
        const [remain, course] = [[...remainWord], [...currnetCourse]];
        remain.splice(i, 1);
        course.push(v);
        if (v === target) {
          return list.push(course);
        }
        dfs(remain, course, v);
      }
    });
  };

  dfs(words, [], begin);

  return list.length === 0 ? 0 : Math.min(...list.map((v) => v.length));
}

console.log(solution('hitd', 'hhhd', ['hhhd', 'hhtd']));
