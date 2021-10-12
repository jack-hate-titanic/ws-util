/*
 * @Author: ws
 * @Date: 2021-10-12 22:51:20
 * @LastEditors: ws
 * @LastEditTime: 2021-10-12 23:16:08
 * @Description:
 */

// 1.返回一个函数
// 2.考虑context为null的时候

Function.prototype.myBind = function (context) {
  const params = [...arguments].slice(1);
  return function () {
    this.apply(context || window, params);
  };
};

// function output(age) {
//   console.log(`${this.name}${age}`);
// }

// const obj = {
//   name: 1111,
// };

// output.bind(obj, 2)();
