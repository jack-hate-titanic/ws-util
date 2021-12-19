/*
 * @Author: ws
 * @Date: 2021-12-19 11:17:16
 * @LastEditors: ws
 * @LastEditTime: 2021-12-19 11:33:25
 * @Description:对象扁平化
 */

Object.prototype.flatObj = function () {
  const res = {};
  const flat = function (obj) {
    console.log(obj);
    Object.entries(obj).forEach((item) => {
      if (Object.prototype.toString.call(item[1]) === "[object Object]") {
        flat(item[1]);
      } else {
        res[item[0]] = item[1];
      }
    });
  };
  flat(this);
  return res;
};

const obj = { a: 1, b: 2, c: { d: { e: 5 } } };
const result = obj.flatObj();
console.log(result);
