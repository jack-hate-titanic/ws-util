/*
 * @Author: ws
 * @Date: 2021-12-18 13:54:26
 * @LastEditors: ws
 * @LastEditTime: 2021-12-18 18:15:33
 * @Description: 深克隆
 * 1.面向不同的对象(正则、数组、date等)要采用不同的处理方式，我们需要实现一个对象类型判断函数
 */
/**
 * @description:
 * @param {*}
 * @return {*}
 * @author: ws
 */
// const isType = (obj, type) => {
//   if (typeof obj !== "object") return false;
//   const typeString = Object.prototype.toString.call(obj);
//   let flag;
//   switch (type) {
//     case "Array":
//       flag = typeString === "[object Array]";
//       break;
//     case "Date":
//       flag = typeString === "[object Date]";
//       break;
//     case "RegExp":
//       flag = typeString === "[object RegExp]";
//       break;
//     default:
//       flag = false;
//   }
//   return flag;
// };

// /**
//  * @description: 深克隆
//  * @param {*} parent object需要克隆的对象
//  * @return {*} 深克隆后返回的结果
//  * @author: ws
//  */
// const clone = (parent) => {
//   const parents = [];
//   const children = [];
//   const _clone = (parent) => {
//     // 考虑所有类型
//     if (parent === null) return null;
//     if (typeof parent !== "object") return parent;
//     let child, proto;
//     if (isType(parent, "Array")) {
//       // 对数组做处理
//       child = [];
//     } else if (isType(parent, "Date")) {
//       child = new Date(parent.getTime());
//     } else {
//       proto = Object.getPrototypeOf(parent);
//       child = Object.create(proto);
//     }
//     // 处理循环引用
//     console.log(parent, "parent");
//     const index = parents.indexOf(parent);
//     if (index !== -1) {
//       return children[index];
//     }
//     parents.push(parent);
//     children.push(child);
//     for (let i in parent) {
//       child[i] = _clone(parent[i]);
//     }
//     return child;
//   };
//   return _clone(parent);
// };
// 今天目标：1.双向绑定
// 2.深拷贝
// 3.路由
const getType = (target) => Object.prototype.toString.call(target);
const canTraverse = {
  "[object Map]": true,
};

// 面试够用版
function deepClone(obj, map = new Map()) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  if (map.get(obj)) {
    return obj;
  }
  map.set(obj, true);
  let copy = {};
  if (canTraverse[getType[obj]]) {
    for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
        copy[i] = deepClone(obj[i]);
      }
    }
  } else {
    if (getType(obj) === "[object Date]") {
      copy = new obj.constructor(obj);
    }
  }

  return copy;
}

function say() {
  console.log("hi");
}

const obj = {
  a: say,
  b: new RegExp("ab+c", "i"),
};
let date = new Date();
let obj1 = deepClone(date);

console.log(obj1 === date);
