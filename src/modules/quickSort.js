/*
 * @Author: ws
 * @Date: 2022-03-03 22:56:09
 * @LastEditors: ws
 * @LastEditTime: 2022-03-03 23:08:36
 * @Description: 
 */


const quickSort = function (nums) {
  let length = nums.length;
  // 为什么这里这样写呢？因为最多分到数组中只有一个值，这个时候把这个值返回
  if (length <= 1) {
    return nums;
  }
  // 选取基点数
  const point = nums[length - 1];
  let left = [];
  let right = [];
  //数组中的每个数与基点数做对比
  // 因为我们是取的最右侧的数字，所以length-1，因为point不用拿出来进行比较
  for (let i = 0; i < length - 1; i++){
    if (nums[i] < point) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  let arr1 = quickSort(left);
  let arr2 = quickSort(right);
  return arr1.concat([point], arr2);

}

const arr = [8, 2, 5, 1, 4];
console.log(quickSort(arr));