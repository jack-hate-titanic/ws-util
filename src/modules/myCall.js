/*
 * @Author: ws
 * @Date: 2021-10-12 22:21:41
 * @LastEditors: ws
 * @LastEditTime: 2021-10-12 23:13:13
 * @Description:
 */
// 1.上下文指向第一个参数
// 2.把myCall中的this指向context.fn
// 3.获取所有的参数

Function.prototype.myCall = function () {
  let context = arguments[0] || window;
  context.fn = this;
  const params = [...arguments].slice(1);
  const result = context.fn(...params);
  return result;
};

// function output(age, age1) {
//   console.log(`${this.name}${age}${age1}`);
// }

// const obj = {
//   name: 1111,
// };

// output.myCall(obj, 1, 2);
