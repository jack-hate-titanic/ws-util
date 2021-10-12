/*
 * @Author: ws
 * @Date: 2021-10-07 09:32:54
 * @LastEditors: ws
 * @LastEditTime: 2021-10-07 09:44:58
 * @Description:
 */

const instanceOf = (left, right) => {
  // 获取引用类型的原型
  let prototype = right.prototype;
  // 获取值的原型
  left = left.__proto__;
  while (true) {
    if (left === null) {
      return false;
    }
    if (prototype === left) {
      return true;
    }
    left = left.__proto__;
  }
};

module.exports = instanceOf;
