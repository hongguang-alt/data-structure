Array.prototype.sequential = function (index) {
  for (let i = 0; i < this.length; i++) {
    if (index === this[i]) {
      return i;
    }
  }
  return -1;
};

const res = [1, 2, 3, 4, 5].sequential(3);
console.log(res);
