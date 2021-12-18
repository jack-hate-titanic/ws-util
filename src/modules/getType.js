/*
 * @Author: ws
 * @Date: 2021-12-18 21:50:12
 * @LastEditors: ws
 * @LastEditTime: 2021-12-18 21:55:32
 * @Description:实现一个函数判断类型
 */
export const getType = function (obj) {
  if (obj === null) {
    return String(obj);
  }
  return typeof obj === "object"
    ? Object.prototype.toString
        .call(obj)
        .replace("[object ", "")
        .replace("]", "")
        .toLowerCase()
    : typeof obj;
};
