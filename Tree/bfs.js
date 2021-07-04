const tree = {
  val: "a",
  children: [
    {
      val: "b",
      children: [
        {
          val: "d",
          children: [],
        },
        {
          val: "e",
          children: [],
        },
      ],
    },
    {
      val: "c",
      children: [
        {
          val: "f",
          children: [],
        },
        {
          val: "g",
          children: [],
        },
      ],
    },
  ],
};

//广度优先
const bfs = (root) => {
  let q = [root];
  while (q.length > 0) {
    //出队
    let obj = q.shift();
    console.log(obj.val);
    obj.children.forEach((item) => {
      q.push(item);
    });
  }
};

bfs(tree);
