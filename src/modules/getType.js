/*
 * @Author: ws
 * @Date: 2021-12-18 21:50:12
 * @LastEditors: ws
 * @LastEditTime: 2022-03-06 22:49:36
 * @Description:实现一个函数判断类型
 */
export const getType = function (obj) {
  let type = typeof obj;
  if (type !== 'object') {
    return type;
  }
  return Object.prototype.toString.call(obj).replace('[object ', '').replace(']', '').toLowerCase();
};

