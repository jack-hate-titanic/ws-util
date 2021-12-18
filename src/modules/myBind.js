/*
 * @Author: ws
 * @Date: 2021-10-12 22:51:20
 * @LastEditors: ws
 * @LastEditTime: 2021-12-13 22:19:56
 * @Description:
 */

// 1.返回一个函数
// 2.考虑context为null的时候

Function.prototype.myBind = function (context) {
  const outArgs = [...arguments].slice(1);
  return function (...innerArgs) {
    this.apply(context || window, [...outArgs, ...innerArgs]);
  };
};

// function output(age) {
//   console.log(`${this.name}${age}`);
// }

// const obj = {
//   name: 1111,
// };

// output.bind(obj, 2)();
