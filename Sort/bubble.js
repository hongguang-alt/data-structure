/**
 * 冒泡排序
 * 比较所有相邻元素，如果第一个比第二个大
 * 则交换它们,一轮下来，可以保证最后一个数是最大的
 * 执行n-1轮，就可以完成排序
 */

Array.prototype.bubble = function () {
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length - 1 - i; j++) {
      if (this[j] > this[j + 1]) {
        const temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }
};
const arr = [5, 4, 3, 2, 1, 0];
arr.bubble();
console.log(arr);
