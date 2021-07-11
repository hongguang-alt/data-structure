/**
 * 快速排序
 * 找一个值，将比它大的放在后面，比它小的放在前面
 * 递归它前面，它后面
 */

Array.prototype.quick = function () {
  const rec = (arr) => {
    if (!arr.length) return [];
    if (arr.length === 1) return arr;
    const left = [];
    const right = [];
    const mid = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i] < mid) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...rec(left), mid, ...rec(right)];
  };
  let result = rec(this);
  result.forEach((item, i) => {
    this[i] = item;
  });
};

const arr = [2, 4, 7, 3, 1, 10, 29, 10];
arr.quick();
console.log(arr);
