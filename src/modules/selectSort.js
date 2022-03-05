/*
 * @Author: ws
 * @Date: 2021-09-25 11:37:44
 * @LastEditors: ws
 * @LastEditTime: 2022-02-27 18:22:21
 * @Description:
 * 选择排序思路：
 *
 */
export const selectSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // 初始化最小值为i
    let min = i;
    // 寻找未排序部分的最小值坐标
    for (let j = i; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    // 最小值坐标如果不是原坐标的话，那么交换位置
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
};
