const mergeIntervals = (arr1, arr2) => {
  return [Math.min(arr1[0], arr2[0]), Math.max(arr1[1], arr2[1])];
};

const isOverlap = (arr1, arr2) => {
  return (arr1[0] <= arr2[0] && arr1[1] >= arr2[0]) || (arr2[0] <= arr1[0] && arr2[1] >= arr1[0]);
};

const merge = (intervals) => {
  const sortedIntervals = [...intervals].sort((a, b) => a[0] - b[0]);

  return sortedIntervals.reduce((merged, interval) => {
    if (merged.length === 0 || !isOverlap(merged[merged.length - 1], interval)) {
      merged.push(interval);
    } else {
      merged[merged.length - 1] = mergeIntervals(merged[merged.length - 1], interval);
    }

    return merged;
  }, []);
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
