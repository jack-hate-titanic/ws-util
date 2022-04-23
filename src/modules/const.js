/*
 * @Author: ws
 * @Date: 2021-12-18 09:37:02
 * @LastEditors: ws
 * @LastEditTime: 2022-03-07 07:37:05
 * @Description:由于ES5环境没有block的概念，所以是无法百分百实现const，只能是挂载到某个对象下，要么是全局的window，要么就是自定义一个object来当容器
 */
// export var _const = function (data, value) {
//   global.data = value;
//   Object.defineProperty(global, data, {
//     enumerable: false,
//     configurable: false,
//     get: function () {
//       return value;
//     },
//     set: function (data) {
//       if (data !== value) {
//         throw new TypeError("Assignment to constant variable.");
//       } else {
//         return value;
//       }
//     },
//   });
// };


var _const = function (data, value) {
  global.data = value;
  Object.defineProperty(global, data, {
    enumerable: false,
    configurable: false,
    get: () => {
      return value;
    },
    set: () => {
      throw new TypeError('Assignment to constant variable')
    }
  })

}


_const('a', 10);
console.log(a);