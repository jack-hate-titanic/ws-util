/*
 * @Author: ws
 * @Date: 2022-02-27 10:30:02
 * @LastEditors: ws
 * @LastEditTime: 2022-02-27 10:49:57
 * @Description: 
 */

export const bubbleSort = function (nums) {
  // 缓存数组长度
  const len = nums.length;
  // 冒泡排序时间复杂度为O(n^2),所以上来就两个for循环
  // 第一层循环可以使每次把最大的值，放到数组的最后面
  for (let i = 0; i < len; i++){
    // 第二层值只需要遍历len-1次，因为最大的值已经到数组最后面了
    // 第二层循环是用来交换的
    for (let j = 0; j < len - i;j++){
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
}
