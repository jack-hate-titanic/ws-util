/*
 * @Author: ws
 * @Date: 2021-09-15 22:17:41
 * @LastEditors: ws
 * @LastEditTime: 2021-09-15 22:33:18
 * @Description:
 */
import { shallowClone } from "../modules/shallowClone";

test("shallowClone", () => {
  const a = {
    b: { c: 1 },
  };
  expect(shallowClone(a) === a).toBe(false);
});
