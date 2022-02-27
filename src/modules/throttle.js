/*
 * @Author: ws
 * @Date: 2021-12-13 21:49:57
 * @LastEditors: ws
 * @LastEditTime: 2022-02-23 07:44:06
 * @Description:
 */

const throttle = (func,time) =>{
  let pre = 0;
  let cur = 0;
  return  (...args) =>{
    cur = new Date();
    if (cur - pre > time) {
      func(...args);
      pre = cur;
    }
  }
}
