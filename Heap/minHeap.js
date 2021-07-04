//最小堆
class MinHeap {
  constructor() {
    this.heap = [];
  }
  getParentIndex(index) {
    //位移1位，相当于  Math.floor(index / 2)
    return (index - 1) >> 1;
  }
  getLeftIndex(index) {
    return index * 2 + 1;
  }
  getRightIndex(index) {
    return index * 2 + 2;
  }
  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
  shiftUp(index) {
    if (index === 0) {
      return;
    }
    if (this.heap[this.getParentIndex(index)] > this.heap[index]) {
      this.swap(this.getParentIndex(index), index);
      this.shiftUp(this.getParentIndex(index));
    }
  }
  shiftDown(index) {
    let left = this.getLeftIndex(index);
    let right = this.getRightIndex(index);
    if (this.heap[index] > this.heap[left]) {
      this.swap(left, index);
      this.shiftDown(left);
    }
    if (this.heap[index] > this.heap[right]) {
      this.swap(right, index);
      this.shiftDown(right);
    }
  }
  //插入
  insert(val) {
    this.heap.push(val);
    this.shiftUp(this.heap.length - 1);
  }
  //删除堆顶
  pop() {
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
  }
  size() {
    return this.heap.length;
  }
  head() {
    return this.heap[0];
  }
}
