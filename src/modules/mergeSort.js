/*
 * @Author: ws
 * @Date: 2021-09-25 15:24:57
 * @LastEditors: ws
 * @LastEditTime: 2021-09-25 15:36:02
 * @Description：归并排序采用分而治之的思想
 * 1.先把自己一块一块分开
 * 2.在把自己一块一块组合
 */
export const mergeSort = (arr) => {
  const half = arr.length / 2;
  if (arr.length < 2) {
    return arr;
  }
  const left = arr.slice(0, half);
  const right = arr.slice(half);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const arr = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      arr.push(right.shift());
    } else {
      arr.push(left.shift());
    }
  }
  return [...arr, ...left, ...right];
};
