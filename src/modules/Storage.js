/*
 * @Author: ws
 * @Date: 2022-03-30 22:38:35
 * @LastEditors: ws
 * @LastEditTime: 2022-03-31 07:46:56
 * @Description: 
 */
// function Storage() { }

// // 自执行函数把实例存储到闭包里面
// Storage.getInstance = (function () { 
//   var instance = null;
//   return function () {
//     if (!instance) {
//       instance = new Storage();
//     }
//     return instance;
//   }
// })();

// Storage.prototype.setItem = function (key, value) {
//   return localStorage.setItem(key, value);
// }

// Storage.prototype.getItem = function (key) {
//   return localStorage.getItem(key);
// }

// 定义一个类
function Singleton(name) {
  this.name = name;
  this.instance = null;
}
// 原型扩展类的一个方法getName()
Singleton.prototype.getName = function() {
  console.log(this.name)
};
// 获取类的实例
Singleton.getInstance = function (name) {
  console.log(this);
  if(!this.instance) {
      this.instance = new Singleton(name);
  }
  return this.instance
};

// 获取对象1
const a = Singleton.getInstance('a');
// 获取对象2
const b = Singleton.getInstance('b');
// 进行比较
console.log(a === b);