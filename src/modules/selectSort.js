/*
 * @Author: ws
 * @Date: 2021-09-25 11:37:44
 * @LastEditors: ws
 * @LastEditTime: 2021-09-25 12:32:51
 * @Description:
 * 选择排序思路：
 *
 */
export const selectSort = (arr) => {
  //没有运算符“<”不能应用于 JavaScript 中的类型“未定义”错误，就像您在其他类型语言中发现的那样。因此，JavaScript 将带有运算符的不兼容类型评估为 false。
  if (arr.length <= 1) {
    return arr;
  }
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
};
