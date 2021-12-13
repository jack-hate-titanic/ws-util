/*
 * @Author: ws
 * @Date: 2021-12-13 21:49:57
 * @LastEditors: ws
 * @LastEditTime: 2021-12-13 21:54:18
 * @Description:
 */

const throttle = (fn, time) => {
  let now = 0;
  let preTime = 0;
  return function (...args) {
    now = new Date();
    if (now - preTime > time) {
      fn.apply(this, args);
      preTime = new Date();
    }
  };
};
