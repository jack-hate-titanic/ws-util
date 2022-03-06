/*
 * @Author: ws
 * @Date: 2021-10-07 09:32:54
 * @LastEditors: ws
 * @LastEditTime: 2022-03-06 22:13:54
 * @Description:
 */

const instanceOf = function (left,right) {
  let proto = Object.getPrototypeOf(left);
  while (proto) {
    if (proto === right.prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}

module.exports = instanceOf;
