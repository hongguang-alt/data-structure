const bt = require("./bt");

/**
 * 后序遍历
 * 结果：3，4，2，6，7，5，1
 */

//使用递归
const lastorderRecursion = (root) => {
  if (!root) return;
  if (root.left) lastorderRecursion(root.left);
  if (root.right) lastorderRecursion(root.right);
  console.log(root.val);
};

lastorderRecursion(bt);

console.log("---------------");

/**
 * 使用栈
 */

const lastorderStack = (root) => {
  if (!root) return;
  const outStack = [];
  const stack = [root];
  while (stack.length) {
    const n = stack.pop();
    outStack.push(n);
    if (n.left) stack.push(n.left);
    if (n.right) stack.push(n.right);
  }
  while (outStack.length) {
    const n = outStack.pop();
    console.log(n.val);
  }
};

lastorderStack(bt);
