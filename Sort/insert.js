/**
 * 插入排序
 * 从第二个数开始往前比。
 * 比他大就往后排。
 * 以此类推进行到最后一个数。
 */

// 保存当前的数字，比较过程中进行覆盖，然后插入
Array.prototype.insert = function () {
  for (let i = 1; i < this.length; i++) {
    // 保存当前的值
    const temp = this[i];
    let j = i;
    while (j > 0) {
      if (temp < this[j - 1]) {
        this[j] = this[j - 1];
      } else {
        break;
      }
      j--;
    }
    this[j] = temp;
  }
};

const arr = [5, 4, 3, 2, 1, 0, 9, 10, 20];
arr.insert();
console.log(arr);
