/*
 * @Author: ws
 * @Date: 2021-12-18 21:28:08
 * @LastEditors: ws
 * @LastEditTime: 2021-12-18 21:28:08
 * @Description:
 */
import { curry } from "../modules/curry";

test("curry", () => {
  const multiFn = (a, b, c) => {
    return a * b * c;
  };

  const multi = curry(multiFn);
  expect(multi(3, 4)(5)).toBe(60);
});
