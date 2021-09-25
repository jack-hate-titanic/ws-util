/*
 * @Author: ws
 * @Date: 2021-09-25 10:21:54
 * @LastEditors: ws
 * @LastEditTime: 2021-09-25 11:35:43
 * @Description:
 * 插入排序思路：
 * 1.分成两段
 * 2.先正循环，然后倒循环
 * 3.每一个前面的值和后面的值相比，其实前面的值已经是有序的，所以想当于把后面的值插入到前面
 */

export const insertSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    // 这里一定要>=0,否则会循环不到第一个
    for (let j = i - 1; j >= 0; j--) {
      // 每次都要用前面的和后面的对比
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};
