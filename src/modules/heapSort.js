/*
 * @Author: ws
 * @Date: 2022-03-05 10:08:10
 * @LastEditors: ws
 * @LastEditTime: 2022-03-05 12:56:00
 * @Description: 
 */

/**
 * @description: 向下堆化
 * @param {*} nums 数组
 * @param {*} n 数组个数
 * @param {*} i 父节点
 * @return {*}
 * @author: ws
 */
const heapify = function (nums, n, i) {
  // 递归出口
  if (i >= n) {
    return;
  }
  // 先求出子节点
  let child1 = i * 2 + 1;
  let child2 = i * 2 + 2;
  // 设置哨兵，当前最大值序号
  let max = i;
  // 获取最大值序号，加一个判断条件，就是child1和child2是否存在
  if (child1<n && nums[child1] > nums[max]) {
    max = child1;
  }
  if (child2<n && nums[child2] > nums[max]) {
    max = child2;
  }
  if (max !== i) {
    // 做交换
    [nums[max], nums[i]] = [nums[i], nums[max]];
    // 递归孩子
    heapify(nums, n, max);
  }
}

const buildHeap = function (nums) {
  // 求最后一个节点的父节点
  let last_parent = Math.floor((nums.length - 1) / 2);
  const length = arr.length;
  for (let i = last_parent-1; i >= 0; i--){
    heapify(nums, length, i)
  }
  
}


const heapSort = function (nums) {
  let length = nums.length;
  buildHeap(nums);
  // 从最后一个数开始交换
  for (let i = length - 1; i >= 0; i--){
    //和大顶堆的第一个数开始交换
    [nums[i], nums[0]] = [nums[0], nums[i]];
    heapify(nums, i, 0);
  }
}

const arr = [4,9,2,10,7,3,6,1];
heapSort(arr);
console.log(arr);
