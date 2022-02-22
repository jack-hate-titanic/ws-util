/*
 * @Author: ws
 * @Date: 2021-12-19 16:20:23
 * @LastEditors: ws
 * @LastEditTime: 2021-12-19 16:24:07
 * @Description:组合多个函数，从右到左，比如：compose(f, g, h) 最终得到这个结果 (...args) => f(g(h(...args))).
 */
function compose(...funcs) {
  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
}
