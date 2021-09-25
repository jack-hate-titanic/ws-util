/*
 * @Author: ws
 * @Date: 2021-09-25 10:40:12
 * @LastEditors: ws
 * @LastEditTime: 2021-09-25 10:44:22
 * @Description:
 */
import { insertSort } from "../modules/insertSort";

test("insertSort", () => {
  const arr = [10, 7, 9, 4];
  const newArr = insertSort(arr);
  expect(newArr.join() === "4,7,9,10").toBe(true);
});
