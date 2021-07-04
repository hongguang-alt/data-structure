const graph = require("./graph");

/**
 * 广度优先
 */

const visited = new Set();
visited.add(1);
const q = [1];

while (q.length) {
  let n = q.shift();
  console.log(n);
  graph[n].forEach((c) => {
    if (!visited.has(c)) {
      q.push(c);
      visited.add(c);
    }
  });
}
