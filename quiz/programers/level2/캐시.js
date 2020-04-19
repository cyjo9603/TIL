"use strict";
function solution(cacheSize, cities) {
    const cacheMemory = [];
    let runTime = 0;
    for (let i = 0; i < cities.length; i++) {
        if (cacheHitCheck(cacheMemory, cities[i].toLocaleLowerCase()))
            runTime++;
        else {
            if (cacheMemory.length === cacheSize)
                cacheMemory.shift();
            if (cacheSize !== 0)
                cacheMemory.push(cities[i].toLocaleLowerCase());
            runTime += 5;
        }
    }
    return runTime;
}
function cacheHitCheck(cacheMemory, cityName) {
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
