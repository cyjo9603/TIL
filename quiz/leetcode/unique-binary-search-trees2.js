function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const generateTrees = (nums) => {
  if (nums === 0) return [];

  return generateTree(1, nums);

  function generateTree(first, last) {
    const result = [];

    if (first === last) return [new TreeNode(first)];
    if (last < first) return [null];

    for (let i = first; i <= last; i++) {
      const [lefts, rights] = [generateTree(first, i - 1), generateTree(i + 1, last)];
      lefts.forEach((left) => {
        rights.forEach((right) => {
          const node = new TreeNode(i, left, right);
          result.push(node);
        });
      });
    }
    return result;
  }
};

console.dir(generateTrees(3), { depth: null });
