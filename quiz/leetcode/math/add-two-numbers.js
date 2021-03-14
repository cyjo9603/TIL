function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  const list = new ListNode(0);
  let head = list;
  let rest = 0;
  while (l1 || l2) {
    let value = (l1?.val || 0) + (l2?.val || 0) + rest;
    rest = 0;
    if (value > 9) [value, rest] = [value - 10, 1];
    head.next = new ListNode(value);
    head = head.next;
    [l1, l2] = [l1?.next, l2?.next];
  }
  if (rest) head.next = new ListNode(rest);
  return list.next;
}
