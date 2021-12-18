/*
 * @Author: ws
 * @Date: 2021-12-18 20:30:09
 * @LastEditors: ws
 * @LastEditTime: 2021-12-18 21:29:37
 * @Description:js函数柯里化
 */
export const curry = function (fn, ...args) {
  const length = fn.length;
  return function () {
    args = args.concat(Array.prototype.slice.call(arguments));
    if (args.length < length) {
      return curry.call(this, fn, ...args);
    } else {
      return fn.apply(this, args);
    }
  };
};
