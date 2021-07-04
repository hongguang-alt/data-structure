/**
 * 获取路径
 */

const json = {
  a: { b: { c: { d: "123" } } },
  e: [1, 3],
};

const dfs = (n, path) => {
  console.log(n, path);
  if (n instanceof Object) {
    Object.keys(n).forEach((item) => {
      dfs(n[item], path.concat(item));
    });
  }
};

dfs(json, []);
