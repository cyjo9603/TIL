function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
  const depths = [];

  search(root, 0);

  return Math.max(...depths);

  function search(tree, depth) {
    if (!tree) return depths.push(depth);

    search(tree.left, depth + 1);
    search(tree.right, depth + 1);
  }
}
