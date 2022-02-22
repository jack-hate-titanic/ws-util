/*
 * @Author: ws
 * @Date: 2021-12-19 22:22:12
 * @LastEditors: ws
 * @LastEditTime: 2021-12-19 22:35:29
 * @Description:思路，首先是Object.is和===区别是什么
 * NaN在===是不相等的，在Object.is是相等的
 * +0和-0在===是相等的，在Object.is是不相等的
 */

Object.prototype.myIs = function (first, second) {
  if (first !== second) {
    // 当前情况下，只有一种情况是特殊的，只需要判断是否为NaN
    // first和y同时为NaN，返回true
    return first !== first && second !== second;
  }
  return first !== 0 || 1 / first === 1 / second;
};

const a = Object.myIs(2, 2);
console.log(a);
