/*
 * @Author: ws
 * @Date: 2021-09-05 17:32:59
 * @LastEditors: ws
 * @LastEditTime: 2021-09-15 22:18:14
 * @Description: 浅拷贝
 */

/**
 * @description:
 * @param 数组或者对象
 * @return 返回一个新的对象
 * @author: ws
 */
export function shallowClone(source) {
  const target = {};
  for (let i in source) {
    if (source.hasOwnProperty(i)) {
      target[i] = source[i];
    }
  }
  return target;
}
