function solution(cacheSize: number, cities: string[]): number {
  const cacheMemory: string[] = [];
  let runTime: number = 0;
  for (let i: number = 0; i < cities.length; i++) {
    if (cacheHitCheck(cacheMemory, cities[i].toLocaleLowerCase())) runTime++;
    else {
      if (cacheMemory.length === cacheSize) cacheMemory.shift();
      if (cacheSize !== 0) cacheMemory.push(cities[i].toLocaleLowerCase());
      runTime += 5;
    }
  }
  return runTime;
}

function cacheHitCheck(cacheMemory: string[], cityName: string): boolean {
  for (let i = 0; i < cacheMemory.length; i++) {
    if (cacheMemory[i] === cityName) {
      cacheMemory.splice(i, 1);
      cacheMemory.push(cityName);
      return true;
    }
  }
  return false;
}

console.log(solution(0, ['Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul']));
