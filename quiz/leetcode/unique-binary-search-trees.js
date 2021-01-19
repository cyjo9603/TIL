function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const numTrees = (n) => {
  return generateTree(1, n).length;

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

console.log(numTrees(3));
