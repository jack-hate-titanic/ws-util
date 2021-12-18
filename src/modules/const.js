/*
 * @Author: ws
 * @Date: 2021-12-18 09:37:02
 * @LastEditors: ws
 * @LastEditTime: 2021-12-18 10:55:05
 * @Description:由于ES5环境没有block的概念，所以是无法百分百实现const，只能是挂载到某个对象下，要么是全局的window，要么就是自定义一个object来当容器
 */
// var _const = function _const(data, value) {
//   window.data = value;
//   Object.defineProperty(window, data, {
//     enumerable: false,
//   });
// };
let person = {};
let temp = "jack";
Object.defineProperty(person, "name", {
  get: function () {
    return temp;
  },
  set: function (value) {
    temp = value;
  },
});
person.name = "rose";
console.log(person.name);
