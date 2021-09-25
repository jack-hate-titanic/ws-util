/*
 * @Author: ws
 * @Date: 2021-09-25 15:36:14
 * @LastEditors: ws
 * @LastEditTime: 2021-09-25 15:39:42
 * @Description:
 */

const { mergeSort } = require("../modules/mergeSort");

test("mergeSort", () => {
  const arr = [19, 10, 8, 6, 20];
  expect(mergeSort(arr).join() == "6,8,10,19,20").toBe(true);
});
