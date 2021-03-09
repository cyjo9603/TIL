function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
  if (!p && !q) return true;
  else if (p?.val !== q?.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

console.log(isSameTree(new TreeNode(1, 2, 3), new TreeNode(1, 2, 3)));
