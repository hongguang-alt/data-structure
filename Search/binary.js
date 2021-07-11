Array.prototype.binary = function (index) {
  let low = 0;
  let heigh = this.length - 1;
  while (low <= heigh) {
    const mid = Math.floor((low + heigh) / 2);
    if (this[mid] == index) {
      return mid;
    } else if (this[mid] < index) {
      low = mid + 1;
    } else if (this[mid] > index) {
      heigh = mid - 1;
    }
  }
  return -1;
};

const res = [1, 2, 3, 4, 5].binary(9);
console.log(res);
