const bt = require("./bt");

/**
 * 先序遍历
 * 结果：1，2，3，4，5，6，7
 */

// 使用递归
const preorderRecursion = (root) => {
  if (!root) return;
  console.log(root.val);
  if (root.left) preorderRecursion(root.left);
  if (root.right) preorderRecursion(root.right);
};
preorderRecursion(bt);

console.log("---------------");

/**
 * 使用栈的方式
 * 栈是先进后出
 * 所以先进右子树，在进左子树
 */
const preorderStack = (root) => {
  if (!root) return;
  const stack = [root];
  while (stack.length) {
    const n = stack.pop();
    console.log(n.val);
    if (n.right) stack.push(n.right);
    if (n.left) stack.push(n.left);
  }
};

preorderStack(bt);
