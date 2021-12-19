/*
 * @Author: ws
 * @Date: 2021-12-19 14:49:16
 * @LastEditors: ws
 * @LastEditTime: 2021-12-19 16:08:34
 * @Description: 手写深度比较
 */

/***
 * 思路：
 * 递归
 * 递归肯定要有边界，就是递归什么时候暂停
 * 结束条件：如果有两个都是值，则对比值是否相等，
 */

const isEqual = function (firstObj, secondObj) {
  const isObject = function (obj) {
    return typeof obj === "object";
  };
  if (!isObject(firstObj) || !isObject(secondObj)) {
    return firstObj === secondObj;
  }
  if (firstObj === secondObj) {
    return true;
  }
  //判断keys数是否相等
  const obj1Keys = Object.keys(firstObj);
  const obj2Keys = Object.keys(secondObj);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  //深度比较每一个key
  for (let key in firstObj) {
    if (!isEqual(firstObj[key], secondObj[key])) {
      return false;
    }
  }
  return true;
};

const obj = { a: 1, b: 2 };
const obj1 = { a: 1, b: 2 };

console.log(isEqual(obj, obj1));
