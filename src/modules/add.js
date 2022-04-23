/*
 * @Author: ws
 * @Date: 2022-03-26 11:12:48
 * @LastEditors: ws
 * @LastEditTime: 2022-04-23 09:00:15
 * @Description: 
 */
// 我们在没有到最后一个参数之前就是要实现保存参数的链式调用
// 保存参数：闭包
// 链式调用：返回自己
// 最后会通过toString，valueOf隐式调用
// function add() {
//   let args = [...arguments];
//   function fn() { 
//     // 实现闭包
//     args = [...args, ...arguments];
//     // 链式调用
//     return fn;
//   }
//   fn.toString = function () {
//     const sum = args.reduce((pre, cur) => pre + cur);
//     return sum;
//   }
//   return fn;
// }

// console.log(+add(1)(2)(3));

function add() {
  let args = [...arguments];
  function fn() {
    // 只有(),并不会进这里
    console.log('不要进来呀');
    args = [...arguments, ...args];
    // 返回自己，实现链式调用
    return fn;
  }
  // fn是对象类型，要把对象类型转化为基础类型，可以使用toString，valueOf，[Symbol.toPrimitive]
  fn[Symbol.toPrimitive] = function () {
    const result = args.reduce((pre, cur) => pre + cur);
    return result;
  }
  // 实现闭包
  return fn;
}

console.log(+add(1));