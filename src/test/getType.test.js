/*
 * @Author: ws
 * @Date: 2021-12-18 21:53:31
 * @LastEditors: ws
 * @LastEditTime: 2021-12-18 21:54:14
 * @Description:
 */
import { getType } from "../modules/getType";

test("getType", () => {
  const arr = [1, 3, 3];
  expect(getType(arr)).toBe("array");
});
