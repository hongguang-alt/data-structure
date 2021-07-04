const bt = require("./bt");

/**
 * 中序遍历
 * 结果：3，2，4，1，6，5，7
 */

// 使用递归
const midorderRecursion = (root) => {
  if (!root) return;
  if (root.left) midorderRecursion(root.left);
  console.log(root.val);
  if (root.right) midorderRecursion(root.right);
};
midorderRecursion(bt);

console.log("---------------");

/**
 * 使用栈
 */

const midorderStack = (root) => {
  if (!root) return;
  const stack = [];
  let p = root;
  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    const n = stack.pop();
    console.log(n.val);
    p = n.right;
  }
};

midorderStack(bt);
