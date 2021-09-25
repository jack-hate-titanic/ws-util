/*
 * @Author: ws
 * @Date: 2021-09-25 12:33:28
 * @LastEditors: ws
 * @LastEditTime: 2021-09-25 12:35:35
 * @Description:
 */

const { selectSort } = require("../modules/selectSort");

test("selectSort", () => {
  const arr = [10, 6, 9, 5, 21];
  expect(selectSort(arr).join() === "5,6,9,10,21").toBe(true);
});
