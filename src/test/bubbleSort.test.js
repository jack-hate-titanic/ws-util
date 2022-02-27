/*
 * @Author: ws
 * @Date: 2022-02-27 10:36:49
 * @LastEditors: ws
 * @LastEditTime: 2022-02-27 10:40:36
 * @Description: 
 */
import { bubbleSort } from '../modules/bubbleSort';



test('bubbleSort ', () => {
  const arr = [4, 2, 10, 1];
  const newArr = bubbleSort(arr);
  console.log(newArr);
});