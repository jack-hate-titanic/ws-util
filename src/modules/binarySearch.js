/*
 * @Author: ws
 * @Date: 2021-09-25 16:02:42
 * @LastEditors: ws
 * @LastEditTime: 2021-09-25 16:44:39
 * @Description:
 * 二分查找
 * 诗曰：管它左侧还是右侧，搜索区间定乾坤。搜索一个元素时，搜索区间两端闭。
 * while条件带等号，否则需要打补丁。if相等就返回，其他的事甭（beng）操心。
 * mid必须加减一，因为区间两端闭。while结束就凉了，凄凄惨惨返-1。
 *
 * 一定要注意，二分查找用于有序数组
 */
export const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = left + (right - left) / 2;
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    }
  }
  return -1;
};
