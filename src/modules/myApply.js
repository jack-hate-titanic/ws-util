/*
 * @Author: ws
 * @Date: 2021-10-12 22:39:17
 * @LastEditors: ws
 * @LastEditTime: 2021-10-12 22:51:15
 * @Description:
 */

Function.prototype.myApply = function () {
  let context = arguments[0];
  context.fn = this;
  const result = context.fn(...arguments[1]);
  return result;
};

// function output(age, age1) {
//   console.log(`${this.name}${age}${age1}`);
// }

// const obj = {
//   name: 1111,
// };

// output.myApply(obj, [1, 2]);
