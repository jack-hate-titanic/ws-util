/*
 * @Author: ws
 * @Date: 2021-12-13 21:41:31
 * @LastEditors: ws
 * @LastEditTime: 2021-12-13 21:41:32
 * @Description:
 */

const debounce = (fn, time) => {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, time);
  };
};
