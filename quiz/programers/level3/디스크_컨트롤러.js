function solution(jobs) {
  const ready = [...jobs.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))];
  let timeRequired = 0;
  let time = ready[0][0];

  while (ready.length > 0) {
    const [required, current, index] = getNextJobAndTime(time, ready);
    ready.splice(index, 1);
    time = current;
    timeRequired += required;
  }

  return parseInt(timeRequired / jobs.length);
}

function getNextJobAndTime(time, jobs) {
  let index = 0;
  let required = 0;
  if (time >= jobs[0][0]) {
    for (let i = 1; i < jobs.length; i++) {
      if (time > jobs[i][0]) index = jobs[index][1] > jobs[i][1] ? i : index;
      else break;
    }
    required = time + jobs[index][1] - jobs[index][0];
    time += jobs[index][1];
  } else {
    required = jobs[index][1];
    time = jobs[index][0] + jobs[index][1];
  }
  return [required, time, index];
}
