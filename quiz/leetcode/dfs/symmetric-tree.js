function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
  if (!root) return true;

  return symmetryChecker(root.left, root.right);
}

function symmetryChecker(left, right) {
  if (!left && !right) return true;
  if (left?.val !== right?.val) return false;

  return symmetryChecker(left.left, right.right) && symmetryChecker(left.right, right.left);
}
