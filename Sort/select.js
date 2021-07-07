/**
 * 选择排序
 * 找到数组中的最小值，选中它并将其放置在第一位。
 * 接着找到第二小的值，选中它并将其放置在第二位。
 * 以此类推，执行 n - 1轮。
 */

Array.prototype.select = function () {
  for (let i = 0; i < this.length - 1; i++) {
    let index = i;
    for (let j = i; j < this.length; j++) {
      if (this[index] > this[j]) {
        index = j;
      }
    }
    const temp = this[index];
    this[index] = this[i];
    this[i] = temp;
  }
};

const arr = [5, 4, 3, 2, 1, 0];
arr.select();
console.log(arr);
